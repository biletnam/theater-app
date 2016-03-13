class SgVenuesController < ApplicationController

before_action :authenticate_admin!, only: [:new, :create, :edit, :update, :destroy]

  def index
    @sg_venues = SgVenue.all
    @all_sg_venues = Unirest.get("https://api.seatgeek.com/2/venues").body

  end
  
  def new
    @sg_venue = SgVenue.find(params[:id])
  end

  def create
    
    @sg_venue = SgVenue.new(
      name: params[:name],
      street_address: params[:street_address],
      city_state: params[:city_state],
      zip_code: params[:zip_code],
      latitude: params[:latitude],
      longitude: params[:longitude],
      phone: params[:phone],
      website: params[:website],
      image: params[:image],
      user_id: current_user.id,
      id: params[:id],
      sg_venue_id: params[:id]) 

    if @sg_venue.save
      flash[:success] = "Venue Information Added"
      redirect_to "/sg_venues/#{@sg_venue.id}"
    else
      render :new
    end
  end

  def show
    if SgDbVenue.where(id: params[:id]) != []
      redirect_to "/sg_db_venues/#{params[:id]}"
    else
      @sg_venue = SgVenue.find(params[:id])
      @sg_reviews = SgReview.where(sg_venue_id: @sg_venue.id)

      sg_event_response = Unirest.get("https://api.seatgeek.com/2/events?venue.id=#{@sg_venue.id}&per_page=10&page=1").body
      @sg_events = sg_event_response["events"]

      @client = GooglePlaces::Client.new(ENV["google_places_key"])
      @google_restaurants = @client.spots(@sg_venue.latitude, @sg_venue.longitude, :types => 'restaurant', :distance => 2778 )
      @price_level = "$"
    end
  end

  def edit
    @sg_venue = SgVenue.find(params[:id])
  end

  def update
    @sg_venue = SgVenue.find(params[:id])

    if @venue.update(
      name: @sg_venue.name,
      street_address: @sg_venue.street_address,
      city_state: @sg_venue.city_state,
      zip_code: @sg_venue.zip_code,
      latitude: @sg_venue.latitude,
      longitude: @sg_venue.longitude,
      phone: params[:phone],
      website: params[:website],
      image: params[:image],
      user_id: current_user.id,
      sg_venue_id: @sg_venue.id)

      flash[:success] = "Venue Information Edited"
      redirect_to "/sg_venues/#{@sg_venue.id}"
    else
      render :edit
    end
  end

  def destroy
    @sg_venue = SgVenue.find(params[:id])

    if @sg_venue.destroy
      flash[:success] = "Venue deleted."
      redirect_to "/sg_venues"
    else
      flash[:warning] = "Unable to delete venue."
      redirect_to "/sg_venues"
    end
  end
  
end
