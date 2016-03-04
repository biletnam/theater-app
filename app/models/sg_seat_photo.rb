class SgSeatPhoto < ActiveRecord::Base

  mount_uploader :image, ImageUploader

  belongs_to :user
  belongs_to :sg_seat

end
