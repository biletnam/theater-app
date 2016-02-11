class Venue < ActiveRecord::Base

  validates :name, :street_address, :city, :state, :zip_code, :phone, :user_id, presence: true
  
  def full_address
    venue_address = street_address + "\n" + city + ", " + state + zip_code
  end

end
