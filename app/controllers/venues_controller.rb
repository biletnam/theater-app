class VenuesController < ApplicationController

before_action :authenticate_admin!, only: [:destroy, :full_index]
before_action :authenticate_vendor!, only: [:new, :create, :edit, :update]

  def index   
    @all_seating_venues = []

    @venues = Venue.all
    @sg_db_venues = SgDbVenue.all

    @venues.each do |venue|
      if venue.seats[0]
        @all_seating_venues << venue
      end
    end

    @sg_db_venues.each do |venue|
      if venue.sg_seats[0]
        @all_seating_venues << venue
      end
    end

    @sorted_seating_venues = @all_seating_venues.sort! { |a,b| a.name.downcase <=> b.name.downcase }
    
    respond_to do |format|
      format.html
      format.json { render json: @venue }
    end
  end

  def full_index
    @all_venues = []
    @venues = Venue.all
    @sg_db_venues = SgDbVenue.all

    @venues.each do |venue|
      @all_venues << venue
    end

    @sg_db_venues.each do |sg_db_venue|
      @all_venues << sg_db_venue
    end

    @sorted_venues = @all_venues.sort! { |a,b| a.name.downcase <=> b.name.downcase }
  end
  
  def new
    @venue = Venue.new unless @venue
  end

  def create
    @venue = Venue.new(
      name: params[:name],
      street_address: params[:street_address],
      city: params[:city],
      state: params[:state],
      zip_code: params[:zip_code],
      latitude_longitude: params[:latitude_longitude],
      phone: params[:phone],
      website: params[:website],
      twitter_handle: params[:twitter_handle],
      image: params[:image],
      user_id: current_user.id)

    if @venue.save
      flash[:success] = "Venue Added"
      redirect_to "/venues/#{@venue.id}"
    else
      render :new
    end
  end

  def show
    if SgDbVenue.where(id: params[:id]) != []
      redirect_to "/sg_db_venues/#{params[:id]}"
    else
      @venue = Venue.find(params[:id])
      @events = Event.where(venue_id: @venue.id)
      @scheduled_events = ScheduledEvent.order_by_date_venue(@venue.id)
      @reviews = Review.where(venue_id: params[:id])
      # @restaurants = Restaurant.where(venue_id: params[:id])
      @twitter = @venue.twitter_handle

      # @client = GooglePlaces::Client.new(ENV["google_places_key"])
      # @google_restaurants = @client.spots(@venue.latitude, @venue.longitude, :types => 'restaurant', :distance => 2778 )
      gon.google_restaurants = @google_restaurants

      gp_api_restaurants_response = Unirest.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{@venue.latitude},#{@venue.longitude}&rankby=distance&type=restaurant&key=#{ENV["google_places_key"]}").body
      @gp_restaurants = []
      gp_api_restaurants_response["results"].each do |restaurant|
        @gp_restaurants << GpRestaurant.new(restaurant)
      end
      @price_level = "$"
    end
  end

  def edit
    @venue = Venue.find(params[:id])
  end

  def update
    @venue = Venue.find(params[:id])

    if @venue.update(
      name: params[:name],
      street_address: params[:street_address],
      city: params[:city],
      state: params[:state],
      zip_code: params[:zip_code],
      latitude_longitude: params[:latitude_longitude],
      phone: params[:phone],
      website: params[:website],
      twitter_handle: params[:twitter_handle],
      image: params[:image],
      user_id: current_user.id)

      flash[:success] = "Venue Edited"
      redirect_to "/venues/#{@venue.id}"
    else
      render :edit
    end
  end

  def destroy
    @venue = Venue.find(params[:id])

    if @venue.destroy
      flash[:success] = "Venue deleted."
      redirect_to "/venues"
    else
      flash[:warning] = "Unable to delete venue."
      redirect_to "/venues"
    end
  end

  def event_search

    @zip_for_sg = params[:search]
    # @page_number = params[:page_number]

    sg_zip_theater_events_response = Unirest.get("https://api.seatgeek.com/2/events?taxonomies.name=theater&postal_code=#{@zip_for_sg}&range=10mi&per_page=100&page=1").body
    
    @sg_zip_theater_events = sg_zip_theater_events_response["events"]
    @zip_events = []
   
    if @sg_zip_theater_events
      @zip_venues = Venue.where(zip_code: params[:search])

      @zip_venues.each do |venue|
        venue.scheduled_events.each do |scheduled_event|
          @zip_events << scheduled_event
        end
      end

      @sg_zip_theater_events.each do |sg_zip_theater_event|
        @zip_events << SgScheduledEvent.new(sg_zip_theater_event)
      end

      @sorted_events = @zip_events.sort! { |a,b| a.date_time <=> b.date_time}
    else 
      if params[:search] == ""
        flash[:warning] = "Please enter a valid query in the search field"
        @no_result_message = "Your search returned no results"
      else
        @no_result_message = "Your search returned no results"
      end
    end

    # @sg_db_venues = SgDbVenue.all

    render :event_search

  end

  def venue_name_search_result # name search and events including zipcode searched but not in radius

    @search_for_sg = params[:search]

    sg_zip_theater_events_response = Unirest.get("https://api.seatgeek.com/2/events?taxonomies.name=theater&q=#{params[:search]}&per_page=100&page=1").body
    
    @sg_zip_theater_events = sg_zip_theater_events_response["events"]
    @sg_zip_theater_venues = []

    if params[:search] == ""
      flash[:warning] = "Please enter a valid query in the search field"
      @no_result_message = "Your search returned no results"
    elsif @sg_zip_theater_events
      @zip_venues = Venue.where("zip_code LIKE ? OR name LIKE ?", "%#{params[:search]}%", "%#{params[:search]}%")

      @zip_venues.each do |zip_venue|
        @sg_zip_theater_venues << zip_venue
      end

      @sg_zip_theater_events.each do |sg_zip_theater_event|
        @sg_zip_theater_venues << SgVenue.new(sg_zip_theater_event["venue"])
      end

      gon.sg_zip_theater_venues = @sg_zip_theater_venues

      if @sg_zip_theater_venues == []
        flash[:warning] = "Please enter a valid query in the search field"
        @no_result_message = "Your search returned no results"
      end
    end

    render :venue_name_search_result
  end

  def venue_zip_search_result

    @zip_for_sg = params[:search]

    sg_zip_theater_events_response = Unirest.get("https://api.seatgeek.com/2/events?taxonomies.name=theater&postal_code=#{@zip_for_sg}&range=10mi&per_page=100&page=1").body
    
    @sg_zip_theater_events = sg_zip_theater_events_response["events"]
    @sg_zip_theater_venues = []

    if params[:search] == ""
      flash[:warning] = "Please enter a valid query in the search field"
      @no_result_message = "Your search returned no results"
    elsif @sg_zip_theater_events
      @zip_venues = Venue.where("zip_code LIKE ?", "%#{params[:search]}%")

      @zip_venues.each do |zip_venue|
        @sg_zip_theater_venues << zip_venue
      end

      @sg_zip_theater_events.each do |sg_zip_theater_event|
        @sg_zip_theater_venues << SgVenue.new(sg_zip_theater_event["venue"])
      end

      gon.sg_zip_theater_venues = @sg_zip_theater_venues

      if @sg_zip_theater_venues == []
        flash[:warning] = "Please enter a valid query in the search field"
        @no_result_message = "Your search returned no results"
      end
    end

    render :venue_zip_search_result
  end

  def venue_name_search
  end

  def venue_zip_search
  end

  def event_zip_search
  end

  def restaurant_details
    @restaurant_place_id = params[:place_id]
    @google_places_key = ENV["google_places_key"]
    google_restaurant_data = Unirest.get("https://maps.googleapis.com/maps/api/place/details/json?placeid=#{@restaurant_place_id}&key=#{ENV['google_places_key']}").body
    @google_restaurant = google_restaurant_data["result"]
    
    @photos_array = @google_restaurant["photos"] if @google_restaurant
    @photo_url_array = []

    if @photos_array
      @photos_array.each do |photo_data|
        photo_url = "https://maps.googleapis.com/maps/api/place/photo?maxheight=200&photoreference=#{photo_data["photo_reference"]}&key=#{@google_places_key}"
        @photo_url_array << photo_url
      end
    end

    gon.restaurant_lat = @google_restaurant["geometry"]["location"]["lat"]
    gon.restaurant_lon = @google_restaurant["geometry"]["location"]["lng"]
    gon.restaurant_place_id = @restaurant_place_id
  end

end
