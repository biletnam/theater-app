class RestaurantsController < ApplicationController

  before_action :authenticate_admin!, only: [:new, :create]
  before_action :authenticate_vendor!, only: [:new, :create]

  def new
    @restaurant = Restaurant.new(venue_id: params[:id])
  end

  def create
    @restaurant = Restaurant.new(
      name: params[:name],
      hours: params[:hours],
      phone: params[:phone],
      website: params[:website],
      menu: params[:menu],
      food_type: params[:food_type],
      street_address: params[:street_address],
      city: params[:city],
      state: params[:state],
      zip_code: params[:zip_code],
      venue_id: params[:id])

    if @restaurant.save
      flash[:success] = "Restaurant successfully added."
      redirect_to "/venues/#{@restaurant.venue_id}"
    else
      render :new
    end
  end

end
