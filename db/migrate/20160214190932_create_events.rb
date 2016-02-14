class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.text :featured_performers
      t.string :event_type
      t.integer :venue_id

      t.timestamps 
    end
  end
end
