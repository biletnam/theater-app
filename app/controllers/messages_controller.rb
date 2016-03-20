class MessagesController < ApplicationController
  
  def new
    @message = Message.new
  end

  def create
    @message = Message.new(
      name: params[:name],
      email: params[:email],
      subject: params[:subject],
      content: params[:content],
      nickname: params[:nickname])

    @message.request = request

    if @message.deliver
      redirect_to "/message_success"
    else
      flash[:warning] = "Cannot send message."
      render :new
    end
  end

  def message_success
  end

end
