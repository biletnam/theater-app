class SgSectionsController < ApplicationController


  def index 
    @sg_db_venue = SgDbVenue.find(params[:id])
    @sg_sections = SgSection.where(sg_db_venue_id: @sg_db_venue.id)
  end

  def new
    @sg_db_venue = SgDbVenue.find(params[:id])
    @sg_section = SgSection.new(sg_db_venue_id: @sg_db_venue.id)
  end

  def create 
    @sg_db_venue = SgDbVenue.find(params[:id])
    @sg_section = SgSection.new(
      name: params[:name],
      number_rows: params[:number_rows],
      sg_venue_id: @sg_db_venue.id,
      sg_db_venue_id: @sg_db_venue.id,
      x_offset: params[:x_offset],
      y_offset: params[:y_offset])

    if @sg_section.save
      flash[:success] = "Section Added"
      redirect_to "/sg_db_venues/#{@sg_db_venue.id}/sg_seats"
    else
      render :new
    end
  end

  def edit
    @sg_section = SgSection.find(params[:id])
    @sg_db_venue = @sg_section.sg_db_venue
  end

  def update
    @sg_section = SgSection.find(params[:id])
    @sg_db_venue = @sg_section.sg_db_venue

    if @sg_section.update(
      name: params[:name],
      number_rows: params[:number_rows],
      sg_venue_id: @sg_venue.id,
      sg_db_venue_id: @sg_db_venue.id,
      x_offset: params[:x_offset],
      y_offset: params[:y_offset])

      flash[:success] = "Section Updated"
      redirect_to "/sg_db_venues/#{@sg_db_venue.id}/sg_seats"
    else
      render :new
    end
  end

  def destroy
    @sg_section = SgSection.find(params[:id])
    @sg_db_venue = @sg_section.sg_db_venue
   
    if @sg_section.destroy
      flash[:success] = "Section deleted."
      redirect_to "/sg_db_venues/#{@sg_db_venue.id}/sg_seats"
    else
      flash[:warning] = "Unable to delete section."
      redirect_to "/sg_db_venues/#{@sg_section.sg_db_venue_id}/sg_seats"
    end
  end

end
