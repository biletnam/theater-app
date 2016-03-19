class SgSeat < ActiveRecord::Base

  has_many :sg_seat_photos
  belongs_to :sg_db_venue
  belongs_to :sg_row
  belongs_to :sg_section

  validates :seat_section, :seat_row, :seat_number, presence: true
end
