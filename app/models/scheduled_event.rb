class ScheduledEvent < ActiveRecord::Base

  has_many :event_seats
  has_many :seats, through: :event_seats
  belongs_to :event

  # validates :date, :time, presence: true

  def friendly_date
    if date != nil
      date.strftime("%b %e, %Y")
    end
  end

  def friendly_time
    if time != nil
      time.strftime("%I:%M %p")
    end
  end

end

