class SgSeatsController < ApplicationController

  # before_action :authenticate_admin!, only: [:new, :create, :edit, :update, :destroy]
  before_action :authenticate_vendor!, only: [:new, :create, :edit, :update, :destroy]

  def index
    @sg_seats = SgSeat.where(sg_db_venue_id: params[:id]).paginate(:page => params[:page], :per_page => 10)
    @sg_db_venue = SgDbVenue.find(params[:id])

    @sections = @sg_db_venue.sg_sections
    # gon.sections = @sections.as_json(:include => [:rows])
    @rows = SgRow.where(sg_db_venue_id: @sg_db_venue.id)

    @seat_data = @sections.to_json({:include => {:sg_rows => {:include => {:sg_seats => {:methods => :sg_seat_photos}}}}})
    
    if @sg_db_venue.stage_height && @sg_db_venue.stage_width && @sg_db_venue.stage_x_offset && @sg_db_venue.stage_y_offset
      @stage_height = @sg_db_venue.stage_height
      @stage_width = @sg_db_venue.stage_width
      @stage_x_offset = @sg_db_venue.stage_x_offset
      @stage_y_offset = @sg_db_venue.stage_y_offset

      gon.stage_height = @stage_height
      gon.stage_width = @stage_width
      gon.stage_x = @stage_x_offset
      gon.stage_y = @stage_y_offset
    end
  end

  def new
    @sg_seat = SgSeat.new(sg_db_venue_id: params[:id])
    @sg_db_venue = SgDbVenue.find(params[:id])
  end

  def create
    @sg_seat = SgSeat.new(
      seat_section: params[:seat_section],
      seat_row: params[:seat_row],
      seat_number: params[:seat_number],
      sg_venue_id: params[:sg_venue_id],
      sg_db_venue_id: params[:sg_db_venue_id],
      sg_row_id: params[:sg_row_id],
      sg_section_id: params[:sg_section_id],
      x_offset: params[:x_offset],
      y_offset: params[:y_offset])

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
      seat_section: params[:seat_section],
      seat_row: params[:seat_row],
      seat_number: params[:seat_number],
      sg_venue_id: params[:sg_venue_id],
      sg_db_venue_id: params[:sg_db_venue_id],
      sg_row_id: params[:sg_row_id],
      sg_section_id: params[:sg_section_id],
      x_offset: params[:x_offset],
      y_offset: params[:y_offset])

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
