class AddVenueIdToRestaurants < ActiveRecord::Migration
  def change
    add_column :restaurants, :venue_id, :integer
  end
end
