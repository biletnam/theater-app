class SgSeat < ActiveRecord::Base

  has_many :sg_seat_photos
  belongs_to :sg_db_venue

  validates :section, :seat_row, :seat_number, presence: true
end
