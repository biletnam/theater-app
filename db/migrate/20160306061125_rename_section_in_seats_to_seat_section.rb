class RenameSectionInSeatsToSeatSection < ActiveRecord::Migration
  def change
    rename_column :seats, :section, :seat_section
    rename_column :sg_seats, :section, :seat_section
  end
end
