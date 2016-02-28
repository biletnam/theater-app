class CreateSgVenues < ActiveRecord::Migration
  def change
    create_table :sg_venues do |t|
      t.string :name
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zip_code
      t.string :latitude_longitude
      t.float :latitude
      t.float :longitude
      t.string :phone
      t.integer :user_id
      t.string :website
      t.text :image
      t.integer :sg_venue_id

      t.timestamps 
    end
  end
end
