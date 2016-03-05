class Venue < ActiveRecord::Base

  has_many :events
  has_many :scheduled_events
  has_many :seats
  has_many :reviews
  has_many :restaurants
  belongs_to :user

  validates :name, :street_address, :city, :state, :zip_code, :phone, :user_id, presence: true
  geocoded_by :full_address
  after_validation :geocode, if: ->(venue){ venue.full_address.present? and venue.full_address_changed? }

  
  def full_address
    "#{street_address}, #{city}, #{state} #{zip_code}"
  end


end
