class ScheduledEvent < ActiveRecord::Base

  has_many :event_seats
  has_many :seats, through: :event_seats
  belongs_to :event

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



end

