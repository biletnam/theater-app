class RemoveSeatIdFromRows < ActiveRecord::Migration
  def change
    remove_column :rows, :seat_id, :integer
  end
end
