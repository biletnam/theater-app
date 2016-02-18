class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :hours
      t.string :phone
      t.string :website
      t.string :menu
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zip_code
      t.string :food_type

      t.timestamps 
    end
  end
end
