class AddRowIdToSeats < ActiveRecord::Migration
  def change
    add_column :seats, :row_id, :integer
  end
end
