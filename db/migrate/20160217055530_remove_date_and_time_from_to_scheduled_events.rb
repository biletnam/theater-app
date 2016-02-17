class RemoveDateAndTimeFromToScheduledEvents < ActiveRecord::Migration
  def change
    remove_column :scheduled_events, :date, :date
    remove_column :scheduled_events, :time, :time
  end
end
