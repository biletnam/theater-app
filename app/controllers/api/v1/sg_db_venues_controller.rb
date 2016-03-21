class Api::V1::SgDbVenuesController < ApplicationController

  def index
    @sg_db_venues = SgDbVenue.all
  end

  def show
    @sg_db_venue = SgDbVenue.find(params[:id])
  end
  
end
