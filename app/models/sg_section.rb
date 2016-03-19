class SgSection < ActiveRecord::Base
  has_many :sg_seats
  has_many :sg_rows
  belongs_to :sg_db_venue
end
