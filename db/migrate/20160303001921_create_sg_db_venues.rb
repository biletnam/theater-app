class CreateSgDbVenues < ActiveRecord::Migration
  def change
    create_table :sg_db_venues do |t|
      t.string :name
      t.string :street_address
      t.string :city_state
      t.string :city
      t.string :state
      t.string :zip_code
      t.float :latitude
      t.float :longitude
      t.string :phone
      t.string :website
      t.text :image
      t.integer :sg_venue_id
      t.integer :user_id

      t.timestamps
    end
  end
end
