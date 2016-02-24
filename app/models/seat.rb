class Seat < ActiveRecord::Base

  has_many :event_seats
  has_many :scheduled_events, through: :event_seats
  has_many :seat_photos
  belongs_to :venue

  # validates :section, :seat_row, :seat_number, presence: true

end
