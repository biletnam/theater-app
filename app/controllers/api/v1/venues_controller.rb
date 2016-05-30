class Api::V1::VenuesController < ApplicationController

  def index
    @venues = Venue.all
  end
  
  def show
    @venue = Venue.find(params[:id])
  end

end
