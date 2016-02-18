class Restaurant < ActiveRecord::Base
  belongs_to :venue


  def full_address
    "#{street_address}, #{city}, #{state} #{zip_code}"
  end
  
end
