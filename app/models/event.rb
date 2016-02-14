class Event < ActiveRecord::Base

  has_many :scheduled_events
  belongs_to :venue
  

end
