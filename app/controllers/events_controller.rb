class EventsController < ApplicationController

  def new
    @event = Event.new
  end

  def create

    @event = Event.create(
      name: params[:name],
      featured_performers: params[:featured_performers],
      event_type: params[:event_type],
      venue_id: params[:id])

    redirect_to "/venues/#{@event.venue_id}"
  end

  def show
    @event = Event.find(params[:id])
  end

end
