class ScheduledEvent < ActiveRecord::Base

  has_many :event_seats
  has_many :seats, through: :event_seats
  belongs_to :event
  belongs_to :venue

  validates :date_time, presence: true

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

  def self.order_by_date_venue(venue_id)
    order(:date_time).where(venue_id: venue_id)
  end

  def self.order_by_date_event(event_id)
    order(:date_time).where(event_id: event_id)
  end

end

