class AddXOffsetAndYOffsettoSections < ActiveRecord::Migration
  def change
    add_column :sections, :x_offset, :integer
    add_column :sections, :y_offset, :integer
  end
end
