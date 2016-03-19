class AddSgSectionAndSgRowToSgSeats < ActiveRecord::Migration
  def change
    add_column :sg_seats, :sg_row_id, :integer
    add_column :sg_seats, :sg_section_id, :integer
    add_column :sg_seats, :x_offset, :integer
    add_column :sg_seats, :y_offset, :integer
  end
end
