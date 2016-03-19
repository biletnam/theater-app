class EventsController < ApplicationController
  
  before_action :authenticate_vendor!, only: [:new, :create, :edit, :update, :destroy]

  def index
    @events = Event.all
  end

  def new
    @event = Event.new unless @event
    @venue = Venue.find(params[:id])
  end

  def create
    @event = Event.new(
      name: params[:name],
      featured_performers: params[:featured_performers],
      event_type: params[:event_type],
      description: params[:description],
      venue_id: params[:id])
    
    if @event.save
      flash[:success] = "Event added. Please add individual event details."
      redirect_to "/venues/#{@event.venue_id}/events/#{@event.id}"
    else
      @venue = Venue.find(params[:id])
      
      flash[:warning] = "event not saved"
      render :new
    end
  end

  def show
    @event = Event.find(params[:id])
    @scheduled_event = @event.scheduled_events.new unless @scheduled_event
    @scheduled_events = ScheduledEvent.order_by_date_event(@event.id)

  end

  def edit
    @event = Event.find(params[:id])
    @venue = @event.venue
  end

  def update
    @event = Event.find(params[:id])

    if @event.update(
      name: params[:name],
      featured_performers: params[:featured_performers],
      event_type: params[:event_type],
      description: params[:description],
      venue_id: @event.venue_id)
    
      flash[:success] = "Event updated. Please edit individual scheduled events if necessary."
      redirect_to "/venues/#{@event.venue_id}/events/#{@event.id}"
    else
      @venue = @event.venue_id
      
      flash[:warning] = "Event not saved"
      render :edit
    end
  end

  def destroy
    @event = Event.find(params[:id])
   
    if @event.destroy
      flash[:success] = "Event deleted."
      redirect_to "/events"
    else
      flash[:warning] = "Unable to delete event."
      redirect_to "/events"
    end
  end

end
