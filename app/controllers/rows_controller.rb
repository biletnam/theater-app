class RowsController < ApplicationController

  def index
    @rows = Row.where(section_id: params[:id])
    @section = @row.section
    @venue = @row.venue
  end

  def new
    @section = Section.find(params[:id])
    @row = Row.new(section_id: @section.id)
    @venue = @section.venue
  end

  def create
    @section = Section.find(params[:id])
    @venue = @section.venue
    @row = Row.new(
      name: params[:name],
      number_seats: params[:number_seats],
      venue_id: @venue.id,
      section_id: @section.id,
      x_offset: params[:x_offset],
      y_offset: params[:y_offset])

    if @row.save
      flash[:success] = "Row Added"
      redirect_to "/venues/#{@venue.id}/seats"
    else
      render :new
    end
  end

  def edit
    @row = Row.find(params[:id])
    @venue = @row.venue
    @section = @row.section
  end

  def update
    @row = Row.find(params[:id])
    @venue = @row.venue
    @section = @row.section

    if @row.update(
      name: params[:name],
      number_seats: params[:number_seats],
      venue_id: @venue.id,
      section_id: @section.id,
      x_offset: params[:x_offset],
      y_offset: params[:y_offset])

      flash[:success] = "Row Updated"
      redirect_to "/venues/#{@venue.id}/seats"
    else
      render :new
    end
  end

  def destroy
    @row = Row.find(params[:id])
    @venue = @row.venue
    @section = @row.section

    if @row.destroy
      flash[:success] = "Row deleted."
      redirect_to "/venues/#{@venue.id}/seats"
    else
      flash[:warning] = "Unable to delete section."
      redirect_to "/venues/#{@venue.id}/seats"
    end

  end
end
