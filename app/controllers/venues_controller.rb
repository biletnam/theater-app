class VenuesController < ApplicationController

before_action :authenticate_admin!, only: [:new, :create, :edit, :update, :destroy]
before_action :authenticate_vendor!, only: [:new, :create, :edit, :update]

  def index
    @venues = Venue.all

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
    @venue = Venue.find(params[:id])
    @events = Event.where(venue_id: @venue.id)
    @scheduled_events = ScheduledEvent.order_by_date_venue(@venue.id)
    @reviews = Review.where(venue_id: params[:id])
    @restaurants = Restaurant.where(venue_id: params[:id])

    @client = GooglePlaces::Client.new(ENV["google_places_key"])
    @google_restaurants = @client.spots(@venue.latitude, @venue.longitude, :types => 'restaurant', :radius => 2778 )
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
