class SgSeatPhotosController < ApplicationController

  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

  def index
    @sg_seat_photos = SgSeatPhoto.where(sg_seat_id: params[:id])
    @sg_seat = SgSeat.find(params[:id])
  end

  def new
    @sg_seat_photo = SgSeatPhoto.new(sg_seat_id: params[:id])
    @sg_seat = SgSeat.find(params[:id])
  end

  def create

    @sg_seat_photo = SgSeatPhoto.new(
      image: params[:image],
      caption: params[:caption],
      default_photo: params[:default_photo],
      sg_seat_id: params[:sg_seat_id],
      user_id: current_user.id)

    @sg_seat = SgSeat.find(params[:id])

    if @sg_seat_photo.save!
      flash[:success] = "Seat photo successfully saved."
      redirect_to "/sg_seats/#{@sg_seat.id}/sg_seat_photos/#{@sg_seat_photo.id}"
    else 
      render :new
    end
  end

  def show
      @sg_seat_photo = SgSeatPhoto.find(params[:id])
      @sg_seat = @sg_seat_photo.sg_seat
    if current_user && current_user.admin || current_user && current_user.id == @sg_seat_photo.user_id
      render :show
    else
      redirect_to "/sg_venues/#{@sg_seat.sg_db_venue.id}/sg_seats"
    end
  end

  def edit
    @sg_seat_photo = SgSeatPhoto.find(params[:id])
    @sg_seat = @sg_seat_photo.sg_seat
  end

  def update
    @sg_seat_photo = SgSeatPhoto.find(params[:id])
    @sg_seat = @sg_seat_photo.sg_seat

    if @sg_seat_photo.update(caption: params[:caption])
      flash[:success] = "Seat photo caption successfully updated."
      redirect_to "/sg_seats/#{@sg_seat.id}/sg_seat_photos/#{@sg_seat_photo.id}"
    else 
      flash[:warning] = "Unable to update seat photo caption."
      render :edit
    end  

  end

  def destroy
    @sg_seat_photo = SgSeatPhoto.find(params[:id])
    @sg_seat = @sg_seat_photo.sg_seat
    @sg_seat_photo.remove_image!
    @sg_seat_photo.save

    if @sg_seat_photo.destroy
      flash[:success] = "Seat photo deleted."
      redirect_to "/sg_venues/#{@sg_seat.sg_venue_id}/sg_seats"
    else 
      flash[:warning] = "Unable to delete seat photo."
      redirect_to "/sg_venues/#{@sg_seat.sg_venue_id}/sg_seats"
    end

  end

end
