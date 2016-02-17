class ReviewsController < ApplicationController

  before_action :authenticate_user!, only: [:new, :create]
  before_action :authenticate_admin!, only: [:index, :destroy]

  def index
    @reviews = Review.all
  end

  def new
    @review = Review.new(venue_id: params[:id])
  end

  def create
    @review = Review.new(
      content: params[:content], 
      venue_id: params[:venue_id], 
      user_id: current_user.id)

    if @review.save
      flash[:success] = "Review posted successfully."
      redirect_to "/venues/#{@review.venue_id}"
    else 
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

end
