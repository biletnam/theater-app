class Event < ActiveRecord::Base

  has_many :scheduled_events
  belongs_to :venue

  validates :name, :event_type, :description, presence: true


end
