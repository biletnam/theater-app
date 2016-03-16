class AddOffsetsToRows < ActiveRecord::Migration
  def change
    add_column :rows, :x_offset, :integer
    add_column :rows, :y_offset, :integer
    add_column :seats, :x_offset, :integer
    add_column :seats, :y_offset, :integer
  end
end
