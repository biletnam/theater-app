class AddCityStateToSgScheduledEvents < ActiveRecord::Migration
  def change
    add_column :sg_scheduled_events, :city_state, :string
    add_column :sg_scheduled_events, :street_address, :string
    add_column :sg_scheduled_events, :zip_code, :string
    add_column :sg_scheduled_events, :venue_name, :string
    add_column :sg_scheduled_events, :name, :string
    add_column :sg_scheduled_events, :lowest_price, :decimal, precision: 8, scale: 2
    add_column :sg_scheduled_events, :highest_price, :decimal, precision: 8, scale: 2
    add_column :sg_scheduled_events, :average_price, :decimal, precision: 8, scale: 2
  end
end
