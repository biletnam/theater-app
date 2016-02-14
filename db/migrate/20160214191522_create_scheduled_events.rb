class CreateScheduledEvents < ActiveRecord::Migration
  def change
    create_table :scheduled_events do |t|
      t.date :date
      t.time :time
      t.integer :event_id

      t.timestamps 
    end
  end
end
