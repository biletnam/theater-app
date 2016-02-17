class ChangeImageToTextInSeatPhotos < ActiveRecord::Migration
  def change
    change_table :seat_photos do |t|
      t.change :image, :text
      
    end
  end
end
