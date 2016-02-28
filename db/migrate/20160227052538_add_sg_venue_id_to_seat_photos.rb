class AddSgVenueIdToSeatPhotos < ActiveRecord::Migration
  def change
    add_column :seat_photos, :sg_venue_id, :integer
  end
end
