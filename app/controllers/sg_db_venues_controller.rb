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
    # @sg_events = Event.where(venue_id: @venue.id)
    sg_event_response = Unirest.get("https://api.seatgeek.com/2/events?venue.id=#{@sg_db_venue.id}&per_page=10&page=1").body
    @sg_events = sg_event_response["events"]
    # @scheduled_events = ScheduledEvent.order_by_date_venue(@venue.id)
    @sg_reviews = SgReview.where(sg_db_venue_id: params[:id])

    # @restaurants = Restaurant.where(venue_id: params[:id])

    @client = GooglePlaces::Client.new(ENV["google_places_key"])
    @google_restaurants = @client.spots(@sg_db_venue.latitude, @sg_db_venue.longitude, :types => 'restaurant', :radius => 2778 )
    @price_level = "$"

    # @sg_venue = Unirest.get("https://api.seatgeek.com/2/venues/#{@venue.sg_venue_id}").body
    # @all_sg_theater_events = Unirest.get("https://api.seatgeek.com/2/events?taxonomies.name=theater").body
  end

  def edit
    @sg_db_venue = SgDbVenue.find(params[:id])
  end

  def update
    @sg_db_venue = SgDbVenue.find(params[:id])

    if @sg_db_venue.update(
      name: params[:name],
      street_address: params[:street_address],
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

      flash[:success] = "Venue Edited"
      redirect_to "/sg_db_venues/#{@sg_db_venue.id}"
    else
      render :edit
    end
  end

  def destroy
    @sg_db_venue = SgDbVenue.find(params[:id])

    if @sg_db_venue.destroy
      flash[:success] = "Venue deleted."
      redirect_to "/sg_db_venues"
    else
      flash[:warning] = "Unable to delete venue."
      redirect_to "/sg_db_venues"
    end

  end

end