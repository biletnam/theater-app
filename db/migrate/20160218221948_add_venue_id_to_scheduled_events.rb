class AddVenueIdToScheduledEvents < ActiveRecord::Migration
  def change
    add_column :scheduled_events, :venue_id, :integer
  end
end
