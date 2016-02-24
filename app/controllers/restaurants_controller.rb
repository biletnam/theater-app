class RestaurantsController < ApplicationController

  before_action :authenticate_admin!, only: [:new, :create, :edit, :update, :destroy]
  before_action :authenticate_vendor!, only: [:new, :create, :edit, :update, :destroy]

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

  def show
    @restaurant = Restaurant.find(params[:id])
    @venue = @restaurant.venue_id
  end

  def edit
    @restaurant = Restaurant.find(params[:id])
    @venue = @restaurant.venue_id
  end

  def update
    @restaurant = Restaurant.find(params[:id])
    @venue = @restaurant.venue_id

     if @restaurant.update(
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

      flash[:success] = "Restaurant successfully updated."
      redirect_to "/venues/#{@restaurant.venue_id}"
    else
      render :edit
    end
  end

  def destroy
    @restaurant = Restaurant.find(params[:id])

    if @restaurant.destroy
      flash[:success] = "Restaurant deleted."
      redirect_to "/venues/#{@restaurant.venue_id}"
    else
      flash[:warning] = "Unable to delete seat."
      redirect_to "/venues/#{@restaurant.venue_id}"
    end
  end

end
