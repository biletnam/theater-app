class AddSgVenueIdToSeats < ActiveRecord::Migration
  def change
    add_column :seats, :sg_venue_id, :integer
  end
end
