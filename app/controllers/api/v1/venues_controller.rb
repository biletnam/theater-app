class Api::V1::VenuesController < ApplicationController

def index
  @venues = Venue.all
end

end
