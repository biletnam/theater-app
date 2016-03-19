class Seat < ActiveRecord::Base

  has_many :seat_photos
  belongs_to :venue
  belongs_to :row
  belongs_to :section

  validates :seat_section, :seat_row, :seat_number, presence: true

end
