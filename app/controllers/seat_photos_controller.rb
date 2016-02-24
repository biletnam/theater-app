class SeatPhotosController < ApplicationController

  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

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
      seat_id: params[:seat_id],
      user_id: current_user.id)

    @seat = Seat.find(params[:id])

    if @seat_photo.save!
      flash[:success] = "Seat photo successfully saved."
      redirect_to "/seats/#{@seat.id}/seat_photos/#{@seat_photo.id}"
    else 
      render :new
    end
  end

  def show
      @seat_photo = SeatPhoto.find(params[:id])
      @seat = @seat_photo.seat
    if current_user && current_user.admin || current_user && current_user.id == @seat_photo.user_id
      render :show
    else
      redirect_to "/"
    end
  end

  def edit
    @seat_photo = SeatPhoto.find(params[:id])
    @seat = @seat_photo.seat
  end

  def update
    @seat_photo = SeatPhoto.find(params[:id])
    @seat = @seat_photo.seat

    if @seat_photo.update(caption: params[:caption])
      flash[:success] = "Seat photo caption successfully updated."
      redirect_to "/seats/#{@seat.id}/seat_photos/#{@seat_photo.id}"
    else 
      flash[:warning] = "Unable to update seat photo caption."
      redirect_to "/seats/#{@seat.id}/seat_photos/#{@seat_photo.id}"
    end  

  end

  def destroy
    @seat_photo = SeatPhoto.find(params[:id])
    @seat = @seat_photo.seat
    @seat_photo.remove_image!
    @seat_photo.save

    if @seat_photo.destroy
      flash[:success] = "Seat photo deleted."
      redirect_to "/venues/#{@seat.venue_id}/seats"
    else 
      flash[:warning] = "Unable to delete seat photo."
      redirect_to "/venues/#{@seat.venue_id}/seats"
    end

  end

end
