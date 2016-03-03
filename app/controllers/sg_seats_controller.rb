class SgSeatsController < ApplicationController

  before_action :authenticate_admin!, only: [:new, :create, :edit, :update, :destroy]
  before_action :authenticate_vendor!, only: [:new, :create, :edit, :update, :destroy]

  def index
    @sg_seats = SgSeat.where(sg_db_venue_id: params[:id])
    @sg_db_venue = SgDbVenue.find(params[:id])
  end

  def new
    @sg_seat = SgSeat.new(sg_db_venue_id: params[:id])
    @sg_db_venue = SgDbVenue.find(params[:id])
  end

  def create
    @sg_seat = SgSeat.new(
      section: params[:section],
      seat_row: params[:seat_row],
      seat_number: params[:seat_number],
      sg_venue_id: params[:sg_venue_id],
      sg_db_venue_id: params[:sg_db_venue_id])

    @sg_db_venue = SgDbVenue.find(params[:id])

    if @sg_seat.save
      flash[:success] = "Seat successfully added."
      redirect_to "/sg_db_venues/#{@sg_seat.sg_db_venue_id}/sg_seats/new"
    else 
      render :new
    end
  end

  def edit
    @sg_seat = SgSeat.find(params[:id])
    @sg_db_venue = @sg_seat.sg_db_venue
  end

  def update
    @sg_seat = SgSeat.find(params[:id])
    @sg_db_venue = @sg_seat.sg_db_venue

    if @sg_seat.update(
      section: params[:section],
      seat_row: params[:seat_row],
      seat_number: params[:seat_number],
      sg_venue_id: params[:sg_venue_id],
      sg_db_venue_id: params[:sg_db_venue_id])

      flash[:success] = "Seat updated."
      redirect_to "/sg_db_venues/#{@sg_seat.sg_db_venue_id}/sg_seats"
    else 
      render :edit
    end
  end

  def destroy
    @sg_seat = SgSeat.find(params[:id])
   
    if @sg_seat.destroy
      flash[:success] = "Seat deleted."
      redirect_to "/sg_db_venues/#{@sg_seat.sg_db_venue_id}/sg_seats"
    else
      flash[:warning] = "Unable to delete seat."
      redirect_to "/sg_db_venues/#{@sg_seat.sg_db_venue_id}/sg_seats"
    end
  end
  
end
