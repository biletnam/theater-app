class Seat < ActiveRecord::Base

  has_many :seat_photos
  belongs_to :venue

  validates :section, :seat_row, :seat_number, presence: true

end
