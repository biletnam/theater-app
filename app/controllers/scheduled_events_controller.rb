class ScheduledEventsController < ApplicationController

before_action :authenticate_admin!, only: [:new, :create, :edit, :update, :index, :show]
before_action :authenticate_vendor!, only: [:new, :create, :edit, :update]

  def index
    @scheduled_events = ScheduledEvent.all
  end

  def new
    @scheduled_event = ScheduledEvent.new
  end

  def create
    @event = Event.find(params[:id])

    @scheduled_event = ScheduledEvent.new(
      date_time: "#{params[:scheduled_event]["date_time(1i)"]}-#{params[:scheduled_event]["date_time(2i)"]}-#{params[:scheduled_event]["date_time(3i)"]} #{params[:scheduled_event]["date_time(4i)"]}:#{params[:scheduled_event]["date_time(5i)"]}",
      buy_ticket_link: params[:buy_ticket_link],
      event_id: @event.id,
      venue_id: @event.venue_id)

    if @scheduled_event.save
      flash[:success] = "Scheduled event successfully added."
      redirect_to "/venues/#{@event.venue_id}/events/#{@event.id}"
    else 
      render "events/show"
    end
  end

  def show
    @scheduled_event = ScheduledEvent.find(params[:id])
  end

  def edit
    @scheduled_event = ScheduledEvent.find(params[:id]) if current_user && current_user.admin || @scheduled_event.venue.user_id == current_user.id
    @event = Event.find(@scheduled_event.event_id)
  end

  def update
    @scheduled_event = ScheduledEvent.find(params[:id])
    @event = Event.find(@scheduled_event.event_id)

    if @scheduled_event.update(
      date_time: "#{params[:scheduled_event]["date_time(1i)"]}-#{params[:scheduled_event]["date_time(2i)"]}-#{params[:scheduled_event]["date_time(3i)"]} #{params[:scheduled_event]["date_time(4i)"]}:#{params[:scheduled_event]["date_time(5i)"]}",
      buy_ticket_link: params[:buy_ticket_link],
      event_id: @event.id,
      venue_id: @event.venue_id)

      flash[:success] = "Scheduled event updated."
      redirect_to "/venues/#{@event.venue_id}/events/#{@event.id}"
    else 
      render :edit
    end
  end

  def destroy
    @scheduled_event = ScheduledEvent.find(params[:id])
    @event = @scheduled_event.event
    @venue = @scheduled_event.venue
    @scheduled_event.destroy

    redirect_to "/venues/#{@venue.id}/events/#{@event.id}"
  end

end

