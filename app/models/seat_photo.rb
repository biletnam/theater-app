class SeatPhoto < ActiveRecord::Base

  belongs_to :user
  belongs_to :seat

end
