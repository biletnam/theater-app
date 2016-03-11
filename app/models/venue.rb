class Venue < ActiveRecord::Base

  has_many :events
  has_many :scheduled_events
  has_many :seats
  has_many :reviews
  has_many :restaurants
  has_many :rows
  has_many :sections
  belongs_to :user

  validates :name, :street_address, :city, :state, :zip_code, :phone, :user_id, presence: true
  geocoded_by :full_address
  after_validation :geocode, if: ->(venue){ venue.full_address.present? and venue.street_address_changed? }

  def full_address
    "#{street_address}, #{city}, #{state} #{zip_code}"
  end
  
end
