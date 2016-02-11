class VenuesController < ApplicationController

before_action :authenticate_admin!, only: [:new, :create]

  def index
    @venues = Venue.all
  end
  
  def new
    @venue = Venue.new
  end

  def create
    @venue = Venue.new(name: params[:name],
                      street_address: params[:street_address],
                      city: params[:city],
                      state: params[:state],
                      zip_code: params[:zip_code],
                      latitude_longitude: params[:latitude_longitude],
                      phone: params[:phone],
                      user_id: current_user.id)

    if @venue.save
      flash[:success] = "Venue Added"
      redirect_to "/venues/#{@venue.id}"
    else
      render :new
    end
  end

  def show
    @venue = Venue.find(params[:id])

  end

  def edit
  end

  def update
  end

  def destroy
  end

end
