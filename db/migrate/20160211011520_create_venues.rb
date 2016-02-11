class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues do |t|
      t.string :name
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zip_code
      t.string :latitude_longitude
      t.string :phone
      t.integer :user_id

      t.timestamps 
    end
  end
end
