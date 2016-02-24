class Restaurant < ActiveRecord::Base
  
  belongs_to :venue

  validates :name, :food_type, :hours, :phone, :street_address, :city, :state, :zip_code, presence: true

  def full_address
    "#{street_address}, #{city}, #{state} #{zip_code}"
  end
  
end
