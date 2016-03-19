class AddSeatingChartToVenues < ActiveRecord::Migration
  def change
    add_column :venues, :seating_chart, :boolean, default: false
  end
end
