class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session #:exception

  def authenticate_admin!
      redirect_to "/" unless current_user && current_user.admin
  end

  def authenticate_vendor!
      redirect_to "/" unless current_user && current_user.vendor
  end

end
