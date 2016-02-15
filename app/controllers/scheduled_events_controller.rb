class ScheduledEventsController < ApplicationController

before_action :authenticate_admin!, only: [:new, :create]
before_action :authenticate_vendor!, only: [:new, :create]

  def index
    @scheduled_events = ScheduledEvent.all
  end

  def new
    @scheduled_event = ScheduledEvent.new
  end

  def create
    @scheduled_event = ScheduledEvent.new(
      date: params[:date],
      time: params[:time],
      buy_ticket_link: params[:buy_ticket_link],
      event_id: params[:id])

    @event = Event.find(params[:id])

    if @scheduled_event.save
      flash[:success] = "Scheduled Event Successfully Added."
      redirect_to "/venues/#{@event.venue_id}/events/#{@event.id}"
    else 
      render "events/show"
    end
  end

  def show
    @scheduled_event = ScheduledEvent.find(params[:id])
  end

end
