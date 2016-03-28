class GpRestaurant

  attr_reader :place_id, :name, :lat, :lng, :icon, :photo_array, :types, :vicinity, :opening_hours_array, :reviews_array, :formatted_address, :formatted_phone_number, :price_level, :rating

  def initialize(hash)

    @place_id = hash["place_id"]
    @name = hash["name"]
    @lat = hash["geometry"]["location"]["lat"]
    @lng = hash["geometry"]["location"]["lng"]
    @icon = hash["icon"]
    @photo_array = hash["photos"]
    @types = hash["types"]
    @vicinity = hash["vicinity"]
    @reviews_array = hash["reviews"]
    @formatted_address = hash["formatted_address"]
    @phone = hash["formatted_phone_number"]
    @price_level = hash["price_level"]
    @rating = hash["rating"]
  end

end