class AddSgVenueIdToVenues < ActiveRecord::Migration
  def change
    add_column :venues, :sg_venue_id, :integer
  end
end
