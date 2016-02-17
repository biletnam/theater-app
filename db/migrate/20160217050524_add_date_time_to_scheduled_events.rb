class AddDateTimeToScheduledEvents < ActiveRecord::Migration
  def change
    add_column :scheduled_events, :date_time, :datetime
  end
end
