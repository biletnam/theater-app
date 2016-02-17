class SeatPhotosController < ApplicationController

  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  before_action :authenticate_vendor!, only: [:new, :create, :edit, :update, :destroy]

  def index
    @seat_photos = SeatPhoto.where(seat_id: params[:id])
    @seat = Seat.find(params[:id])
  end

  def new
    @seat_photo = SeatPhoto.new(seat_id: params[:id])
    @seat = Seat.find(params[:id])
  end

  def create
    @seat_photo = SeatPhoto.new(
      image: params[:image],
      caption: params[:caption],
      default_photo: params[:default_photo],
      seat_id: params[:seat_id])

    @seat = Seat.find(params[:id])

    if @seat_photo.save
      flash[:success] = "Seat photo successfully saved."
      redirect_to "/venues/#{@seat.venue_id}/seats"
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
