class SgDbVenue < ActiveRecord::Base

  has_many :sg_events
  has_many :sg_seats
  has_many :sg_rows
  has_many :sg_sections
  has_many :sg_reviews
  has_many :sg_restaurants
  belongs_to :user

  validates :name, :street_address, :city, :state, :zip_code, :phone, :user_id, presence: true
  
  def full_address
    "#{street_address}, #{city}, #{state} #{zip_code}"
  end

end
