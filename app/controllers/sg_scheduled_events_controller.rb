class SgScheduledEventsController < ApplicationController

  def new
    @sg_scheduled_event = SgScheduledEvent.new
  end

end
