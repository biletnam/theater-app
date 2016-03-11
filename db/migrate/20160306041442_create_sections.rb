class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.string :name
      t.integer :number_rows
      t.integer :venue_id

      t.timestamps
    end
  end
end
