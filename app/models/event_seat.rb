class EventSeat < ActiveRecord::Base

  belongs_to :scheduled_event
  belongs_to :seat
  belongs_to :user

end
