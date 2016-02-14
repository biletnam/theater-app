class CreateEventSeats < ActiveRecord::Migration
  def change
    create_table :event_seats do |t|
      t.string :status
      t.integer :scheduled_event_id
      t.integer :seat_id
      t.integer :user_id

      t.timestamps 
    end
  end
end
