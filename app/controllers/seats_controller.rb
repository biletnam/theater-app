class SeatsController < ApplicationController

  # before_action :authenticate_admin!, only: [:new, :create, :edit, :update, :destroy]
  before_action :authenticate_vendor!, only: [:new, :create, :edit, :update, :destroy]

  def index
    @seats = Seat.where(venue_id: params[:id]).paginate(:page => params[:page], :per_page => 10)
    @venue = Venue.find(params[:id])

    @sections = @venue.sections
    # gon.sections = @sections.as_json(:include => [:rows])
    @rows = Row.where(venue_id: @venue.id)

    @seat_data = @sections.to_json({:include => {:rows => {:include => {:seats => {:methods => :seat_photos}}}}})
    
    if @venue.stage_height && @venue.stage_width && @venue.stage_x_offset && @venue.stage_y_offset
      @stage_height = @venue.stage_height
      @stage_width = @venue.stage_width
      @stage_x_offset = @venue.stage_x_offset
      @stage_y_offset = @venue.stage_y_offset

      gon.stage_height = @stage_height
      gon.stage_width = @stage_width
      gon.stage_x = @stage_x_offset
      gon.stage_y = @stage_y_offset
    end
  end

  def new
    @seat = Seat.new(venue_id: params[:id])
    @venue = Venue.find(params[:id])
  end

  def create
    @seat = Seat.new(
      seat_section: params[:seat_section],
      seat_row: params[:seat_row],
      seat_number: params[:seat_number],
      venue_id: params[:venue_id],
      row_id: params[:row_id],
      section_id: params[:section_id])

    @venue = Venue.find(params[:id])

    if @seat.save
      flash[:success] = "Seat successfully added."
      redirect_to "/venues/#{@seat.venue_id}/seats/new"
    else 
      render :new
    end
  end

  def edit
    @seat = Seat.find(params[:id])
    @venue = @seat.venue
  end

  def update
    @seat = Seat.find(params[:id])
    @venue = @seat.venue

    if @seat.update(
      seat_section: params[:seat_section],
      seat_row: params[:seat_row],
      seat_number: params[:seat_number],
      venue_id: params[:venue_id],
      row_id: params[:row_id],
      section_id: params[:section_id])

      flash[:success] = "Seat updated."
      redirect_to "/venues/#{@seat.venue_id}/seats"
    else 
      render :edit
    end
  end

  def destroy
    @seat = Seat.find(params[:id])
   
    if @seat.destroy
      flash[:success] = "Seat deleted."
      redirect_to "/venues/#{@seat.venue_id}/seats"
    else
      flash[:warning] = "Unable to delete seat."
      redirect_to "/venues/#{@seat.venue_id}/seats"
    end
  end
  
end
