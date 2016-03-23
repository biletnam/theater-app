class SgRowsController < ApplicationController

  def index
    @sg_rows = SgRow.where(sg_section_id: params[:id])
    @sg_section = @sg_row.sg_section
    @sg_db_venue = @sg_row.sg_db_venue
  end

  def new
    @sg_section = SgSection.find(params[:id])
    @sg_row = SgRow.new(sg_section_id: @sg_section.id)
    @sg_db_venue = @sg_section.sg_db_venue
  end

  def create
    @sg_section = SgSection.find(params[:id])
    @sg_db_venue = @sg_section.sg_db_venue
    @sg_row = SgRow.new(
      name: params[:name],
      number_seats: params[:number_seats],
      sg_venue_id: @sg_db_venue.id,
      sg_db_venue_id: @sg_db_venue.id,
      sg_section_id: @sg_section.id,
      x_offset: params[:x_offset],
      y_offset: params[:y_offset])

    if @sg_row.save
      flash[:success] = "Row Added"
      redirect_to "/sg_db_venues/#{@sg_db_venue.id}/sg_seats"
    else
      render :new
    end
  end

  def edit
    @sg_row = SgRow.find(params[:id])
    @sg_db_venue = @sg_row.sg_db_venue
    @sg_section = @sg_row.sg_section
  end

  def update
    @sg_row = SgRow.find(params[:id])
    @sg_db_venue = @sg_row.sg_db_venue
    @sg_section = @sg_row.sg_section

    if @sg_row.update(
      name: params[:name],
      number_seats: params[:number_seats],
      sg_venue_id: @sg_db_venue.id,
      sg_db_venue_id: @sg_db_venue.id,
      sg_section_id: @sg_section.id,
      x_offset: params[:x_offset],
      y_offset: params[:y_offset])

      flash[:success] = "Row Updated"
      redirect_to "/sg_db_venues/#{@sg_db_venue.id}/sg_seats"
    else
      render :new
    end
  end

  def destroy
    @sg_row = SgRow.find(params[:id])
    @sg_db_venue = @sg_row.sg_db_venue
    @sg_section = @sg_row.sg_section

    if @sg_row.destroy
      flash[:success] = "Row deleted."
      redirect_to "/sg_db_venues/#{@sg_db_venue.id}/sg_seats"
    else
      flash[:warning] = "Unable to delete section."
      redirect_to "/sg_db_venues/#{@sg_db_venue.id}/sg_seats"
    end
  end

end
