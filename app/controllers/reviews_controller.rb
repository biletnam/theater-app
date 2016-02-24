class ReviewsController < ApplicationController

  before_action :authenticate_user!, only: [:new, :create, :edit, :destroy]

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

  def edit
    @review = Review.find(params[:id])
    @venue = @review.venue
  end

  def update
    @review = Review.find(params[:id])
    @venue = @review.venue

    if @review.update(
      content: params[:content], 
      venue_id: params[:venue_id], 
      user_id: current_user.id)

      flash[:success] = "Review posted successfully."
      redirect_to "/venues/#{@review.venue_id}"
    else 
      render :edit
    end
  end

  def destroy
    @review = Review.find(params[:id])

    if @review.destroy
      flash[:success] = "Review deleted successfully."
      redirect_to "/venues/#{@review.venue_id}"
    else
      flash[:warning] = "Unable to delete review."
      redirect_to "/venues/#{@review.venue_id}"
    end
  end

end
