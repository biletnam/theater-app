class SectionsController < ApplicationController

  def index 
    @venue = Venue.find(params[:id])
    @sections = Section.where(venue_id: @venue.id)
  end

  def new
    @venue = Venue.find(params[:id])
    @section = Section.new(venue_id: @venue.id)
  end

  def create 
    @venue = Venue.find(params[:id])
    @section = Section.new(
      name: params[:name],
      number_rows: params[:number_rows],
      venue_id: @venue.id,
      x_offset: params[:x_offset],
      y_offset: params[:y_offset])

    if @section.save
      flash[:success] = "Section Added"
      redirect_to "/venues/#{@venue.id}/seats"
    else
      render :new
    end
  end

  def edit
    @section = Section.find(params[:id])
    @venue = @section.venue
  end

  def update
    @section = Section.find(params[:id])
    @venue = @section.venue

    if @section.update(
      name: params[:name],
      number_rows: params[:number_rows],
      venue_id: @venue.id,
      x_offset: params[:x_offset],
      y_offset: params[:y_offset])

      flash[:success] = "Section Updated"
      redirect_to "/venues/#{@venue.id}/seats"
    else
      render :new
    end
  end

  def destroy
    @section = Section.find(params[:id])
    @venue = @section.venue
   
    if @section.destroy
      flash[:success] = "Section deleted."
      redirect_to "/venues/#{@venue.id}/seats"
    else
      flash[:warning] = "Unable to delete section."
      redirect_to "/venues/#{@section.venue_id}/seats"
    end
  end

end
