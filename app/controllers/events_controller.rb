class EventsController < ApplicationController

  before_action :authenticate_admin!, only: [:new, :create]
  before_action :authenticate_vendor!, only: [:new, :create]

  def index
    @events = Event.all
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(
      name: params[:name],
      featured_performers: params[:featured_performers],
      event_type: params[:event_type],
      description: params[:description],
      venue_id: params[:id])

    @venue = Venue.find(params[:id])
    
    if @event.save
      flash[:success] = "Event Added. Please add individual event details"
      redirect_to "/venues/#{@event.venue_id}/events/#{@event.id}"
    else
      render "venues/show"
    end
  end

  def show
    @event = Event.find(params[:id])
    @scheduled_event = @event.scheduled_events.new unless @scheduled_event
    @scheduled_events = ScheduledEvent.where(event_id: params[:id])
  end

end
