class AddStageHeightToSgDbVenues < ActiveRecord::Migration
  def change
    add_column :sg_db_venues, :stage_height, :integer
    add_column :sg_db_venues, :stage_width, :integer
    add_column :sg_db_venues, :stage_x_offset, :integer
    add_column :sg_db_venues, :stage_y_offset, :integer
  end
end
