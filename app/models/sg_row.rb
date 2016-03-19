class SgRow < ActiveRecord::Base
  has_many :sg_seats
  belongs_to :sg_section
  belongs_to :sg_db_venue
end
