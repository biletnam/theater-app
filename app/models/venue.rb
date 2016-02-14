class Venue < ActiveRecord::Base

  has_many :events
  has_many :seats
  has_many :reviews
  belongs_to :user

  validates :name, :street_address, :city, :state, :zip_code, :phone, :user_id, presence: true
  
  
  def full_address
    "#{street_address}, #{city}, #{state} #{zip_code}"
  end

end
