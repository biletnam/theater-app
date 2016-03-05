class CreateSgScheduledEvents < ActiveRecord::Migration
  def change
    create_table :sg_scheduled_events do |t|
      t.integer :sg_event_id
      t.string :buy_ticket_link
      t.integer :sg_venue_id
      t.datetime :date_time
      t.datetime :date
      t.datetime :time

      t.timestamps
    end
  end
end
