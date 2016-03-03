class SgDbVenuesController < ApplicationController

before_action :authenticate_admin!, only: [:new, :create, :edit, :update, :destroy]

  def index
    @sg_db_venues = SgDbVenue.all

  end
  
  def new
    @sg_db_venue = SgDbVenue.new unless @sg_db_venue
  end

  def create
    @sg_db_venue = SgDbVenue.new(
      name: params[:name],
      street_address: params[:street_address],
      city_state: params[:city_state],
      city: params[:city],
      state: params[:state],
      zip_code: params[:zip_code],
      latitude: params[:latitude],
      longitude: params[:longitude],
      phone: params[:phone],
      website: params[:website],
      image: params[:image],
      sg_venue_id: params[:sg_venue_id],
      user_id: current_user.id,
      id: params[:id])

    if @sg_db_venue.save
      flash[:success] = "SeatGeek Venue Added"
      redirect_to "/sg_db_venues/#{@sg_db_venue.id}"
    else
      render :back
    end

  end

  def show
    @sg_db_venue = SgDbVenue.find(params[:id])
    # @events = Event.where(venue_id: @venue.id)
    # @scheduled_events = ScheduledEvent.order_by_date_venue(@venue.id)
    # @reviews = Review.where(venue_id: params[:id])
    # @restaurants = Restaurant.where(venue_id: params[:id])

    @client = GooglePlaces::Client.new(ENV["google_places_key"])
    @google_restaurants = @client.spots(@sg_db_venue.latitude, @sg_db_venue.longitude, :types => 'restaurant', :radius => 2778 )
    @price_level = "$"

    # @sg_venue = Unirest.get("https://api.seatgeek.com/2/venues/#{@venue.sg_venue_id}").body
    # @all_sg_theater_events = Unirest.get("https://api.seatgeek.com/2/events?taxonomies.name=theater").body
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

  def venue_search

    @zip_for_sg = params[:zip_code]
    @page_number = params[:page_number]

    sg_zip_theater_events_response = Unirest.get("https://api.seatgeek.com/2/events?taxonomies.name=theater&postal_code=#{@zip_for_sg}&range=10mi&per_page=100&page=1").body
    
    @sg_zip_theater_events = sg_zip_theater_events_response["events"]
    @sg_zip_theater_venues = []

    @sg_zip_theater_events.each do |sg_zip_theater_event|
      @sg_zip_theater_venues << SgVenue.new(sg_zip_theater_event["venue"])
    end

    render :venue_search

  end

end
