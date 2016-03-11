class CreateRows < ActiveRecord::Migration
  def change
    create_table :rows do |t|
      t.string :name
      t.integer :number_seats
      t.integer :venue_id
      t.integer :section_id

      t.timestamps
    end
  end
end
