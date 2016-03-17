class AddStageWidthAndStageHeightToVenues < ActiveRecord::Migration
  def change
    add_column :venues, :stage_width, :integer
    add_column :venues, :stage_height, :integer
    add_column :venues, :stage_x_offset, :integer
    add_column :venues, :stage_y_offset, :integer
  end
end
