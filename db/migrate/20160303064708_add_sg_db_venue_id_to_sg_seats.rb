class AddSgDbVenueIdToSgSeats < ActiveRecord::Migration
  def change
    add_column :sg_seats, :sg_db_venue_id, :integer
  end
end
