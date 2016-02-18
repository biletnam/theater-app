class AddImageToVenues < ActiveRecord::Migration
  def change
    add_column :venues, :image, :text
  end
end
