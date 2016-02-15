class ScheduledEvent < ActiveRecord::Base

  has_many :event_seats
  has_many :seats, through: :event_seats
  belongs_to :event

  validates :date, :time, presence: true

end
