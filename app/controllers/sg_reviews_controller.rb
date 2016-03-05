class SgReviewsController < ApplicationController

  before_action :authenticate_user!, only: [:new, :create, :edit, :destroy]

  def index
    @sg_reviews = SgReview.all
  end

  def new
    @sg_review = SgReview.new(sg_db_venue_id: params[:id], sg_venue_id: params[:id])
  end

  def create
    @sg_review = SgReview.new(
      content: params[:content], 
      sg_db_venue_id: params[:sg_db_venue_id], 
      sg_venue_id: params[:sg_venue_id], 
      user_id: current_user.id)

    if @sg_review.save
      flash[:success] = "Review posted successfully."
      redirect_to "/sg_db_venues/#{@sg_review.sg_db_venue_id}"
    else 
      render :new
    end
  end

  def edit
    @sg_review = SgReview.find(params[:id])
    @sg_db_venue = @sg_review.sg_db_venue
  end

  def update
    @sg_review = SgReview.find(params[:id])
    @sg_db_venue = @sg_review.sg_db_venue

    if @sg_review.update(
      content: params[:content], 
      sg_db_venue_id: params[:sg_db_venue_id], 
      sg_venue_id: params[:sg_venue_id], 
      user_id: current_user.id)

      flash[:success] = "Review posted successfully."
      redirect_to "/sg_db_venues/#{@sg_review.sg_db_venue_id}"
    else 
      render :edit
    end
  end

  def destroy
    @sg_review = SgReview.find(params[:id])

    if @sg_review.destroy
      flash[:success] = "Review deleted successfully."
      redirect_to "/sg_db_venues/#{@sg_review.sg_db_venue_id}"
    else
      flash[:warning] = "Unable to delete review."
      redirect_to "/sg_db_venues/#{@sg_review.sg_db_venue_id}"
    end
  end
end
