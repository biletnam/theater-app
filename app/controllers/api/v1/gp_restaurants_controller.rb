class Api::V1::GpRestaurantsController < ApplicationController

def index
  @venue = Venue.find(params[:id])
  @gp_api_restaurants_response = Unirest.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{@venue.latitude},#{@venue.longitude}&rankby=distance&type=restaurant&key=#{ENV["google_places_key"]}").body
   
  @price_level = "$"
end
 
end



