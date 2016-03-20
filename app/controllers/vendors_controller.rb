class VendorsController < ApplicationController

  def new
    @message = Vendor.new
  end

  def create
    @message = Vendor.new(
      name: params[:name],
      email: params[:email],
      subject: params[:subject],
      venue_name: params[:venue_name],
      venue_address: params[:venue_address],
      venue_city: params[:venue_city],
      venue_state: params[:venue_state],
      venue_zip: params[:venue_zip],
      phone: params[:phone],
      sg_venue_id: params[:sg_venue_id],
      content: params[:content],
      file: params[:file],
      nickname: params[:nickname])

    @message.request = request

    if @message.deliver
      redirect_to "/message_sent"
    else
      flash[:warning] = "Cannot send message."
      render :new
    end
  end

  def message_success
  end

end
