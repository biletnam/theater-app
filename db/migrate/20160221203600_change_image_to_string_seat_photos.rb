class ChangeImageToStringSeatPhotos < ActiveRecord::Migration
  def change
    change_column :seat_photos, :image, :string
  end
end
