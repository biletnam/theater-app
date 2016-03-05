class SgReview < ActiveRecord::Base

  belongs_to :sg_db_venue
  belongs_to :sg_venue
  belongs_to :user

  validates :content, presence: true

end
