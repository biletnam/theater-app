class ChangeCityToCityStateInSgVenues < ActiveRecord::Migration
  def change
    remove_column :sg_venues, :city, :string
    remove_column :sg_venues, :state, :string
    add_column :sg_venues, :city_state, :string
  end
end
