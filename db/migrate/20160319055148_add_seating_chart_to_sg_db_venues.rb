class AddSeatingChartToSgDbVenues < ActiveRecord::Migration
  def change
    add_column :sg_db_venues, :seating_chart, :boolean, default: false
  end
end
