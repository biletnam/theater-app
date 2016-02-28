class CreateSgSeats < ActiveRecord::Migration
  def change
    create_table :sg_seats do |t|
      t.string :section
      t.string :seat_row
      t.string :seat_number
      t.integer :venue_id
      t.integer :sg_venue_id

      t.timestamps
    end
  end
end
