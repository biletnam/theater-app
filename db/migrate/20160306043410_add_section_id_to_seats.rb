class AddSectionIdToSeats < ActiveRecord::Migration
  def change
    add_column :seats, :section_id, :integer
  end
end
