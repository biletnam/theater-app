class CreateSeats < ActiveRecord::Migration
  def change
    create_table :seats do |t|
      t.string :section
      t.string :seat_row
      t.integer :seat_number
      t.integer :venue_id

      t.timestamps 
    end
  end
end
