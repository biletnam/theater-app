class SeatsController < ApplicationController

  before_action :authenticate_admin!, only: [:new, :create, :edit, :update, :destroy]
  before_action :authenticate_vendor!, only: [:new, :create]

  def index
    @seats = Seat.where(venue_id: params[:id])
    @venue = Venue.find(params[:id])
  end

  def new
    @seat = Seat.new(venue_id: params[:id])
    @venue = Venue.find(params[:id])
  end

  def create
    @seat = Seat.new(
      section: params[:section],
      seat_row: params[:seat_row],
      seat_number: params[:seat_number],
      venue_id: params[:venue_id])

    @venue = Venue.find(params[:id])

    if @seat.save
      flash[:success] = "Seat successfully added."
      redirect_to "/venues/#{@seat.venue_id}/seats/new"
    else 
      render :new
    end
  end

  def show
    @seat = Seat.find(params[:id])
  end

  def edit
  end

  def update
  end

  def destroy
  end

  
end
