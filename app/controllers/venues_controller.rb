class VenuesController < ApplicationController

before_action :authenticate_admin!, only: [:new, :create, :edit, :update, :destroy]
before_action :authenticate_vendor!, only: [:new, :create, :edit, :update]

  def index
    @venues = Venue.all
  end
  
  def new
    @venue = Venue.new
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
    @event = Event.new 
    @events = Event.where(venue_id: params[:id])
    @reviews = Review.where(venue_id: params[:id])
    @restaurants = Restaurant.where(venue_id: params[:id])
  end

  def edit
    @venue = Venue.find(params[:id])
  end

  def update
    @venue = Venue.find(params[:id])

    @venue.update(
      name: params[:name],
      street_address: params[:street_address],
      city: params[:city],
      state: params[:state],
      zip_code: params[:zip_code],
      latitude_longitude: params[:latitude_longitude],
      phone: params[:phone],
      website: params[:website],
      user_id: current_user.id)

    flash[:success] = "Venue Edited"

    render :show
  end

  def destroy
    @venue = Venue.find(params[:id])
    @venue.destroy

    redirect_to "/venues"

  end

end
