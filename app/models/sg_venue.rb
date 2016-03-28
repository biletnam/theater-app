class SgVenue < ActiveRecord::Base

  attr_reader :id
  attr_accessor :name, :street_address, :city_state, :zip_code, :latitude, :longitude, :phone, :website, :image, :sg_venue_id, :user_id 

  has_many :sg_reviews
  belongs_to :user
  
  def initialize(hash)
    @id = hash["id"]
    @name = hash["name"]
    @street_address = hash["address"]
    @city_state = hash["display_location"]
    @zip_code = hash["postal_code"]
    @latitude = hash["location"]["lat"]
    @longitude = hash["location"]["lon"]
    @sg_venue_id = hash["id"]
  end
  
  def full_address
    "#{street_address}, #{city_state} #{zip_code}"
  end

  def self.find(id)
    self.new(Unirest.get("https://api.seatgeek.com/2/venues/#{id}").body)
  end

end
