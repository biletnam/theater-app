class SgScheduledEvent < ActiveRecord::Base

attr_reader :id
attr_accessor :sg_event_id, :sg_venue_id, :venue_name, :street_address, :city_state, :zip_code, :buy_ticket_link, :name, :date_time, :lowest_price, :highest_price, :average_price

  # has_many :event_seats
  # has_many :seats, through: :event_seats
  # belongs_to :event
  belongs_to :sg_venue

  def initialize(hash)
    @id = hash["id"]
    @sg_event_id = hash["id"]
    @sg_venue_id = hash["venue"]["id"]
    @venue_name = hash["venue"]["name"]
    @street_address = hash["venue"]["address"]
    @city_state = hash["venue"]["display_location"]
    @zip_code = hash["venue"]["postal_code"]
    @buy_ticket_link = hash["url"]
    @name = hash["title"]
    @date_time = hash["datetime_local"].to_datetime
    @lowest_price = hash["stats"]["lowest_price"]
    @highest_price = hash["stats"]["highest_price"]
    @average_price = hash["stats"]["average_price"]

  end  

  def full_address
    "#{street_address}, #{city_state} #{zip_code}"
  end

  def friendly_date
    if date_time != nil
      date_time.strftime("%b %e, %Y")
    end
  end

  def friendly_time
    if date_time != nil
      date_time.strftime("%I:%M %p")
    end
  end

  # def self.order_by_date_venue(sg_venue_id)
  #   order(:date_time).where(sg_venue_id: venue_id)
  # end

  # def self.order_by_date_event(sg_event_id)
  #   order(:date_time).where(sg_event_id: event_id)
  # end
end
