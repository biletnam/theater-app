class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :seat_photos
  has_many :events
  has_many :reviews
  has_many :event_seats

  def user_name
    user_name = email
    user_name_array = user_name.split("")
    to_index = 0

    user_name_array.each_with_index do |character, index|
      if character == "@"
        to_index = index - 1
      end
    end
    user_name = user_name[0..to_index]
  end

end
