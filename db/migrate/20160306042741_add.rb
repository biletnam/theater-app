class Add < ActiveRecord::Migration
  def change
    add_column :rows, :seat_id, :integer
  end
end
