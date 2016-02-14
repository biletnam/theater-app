class CreateSeatPhotos < ActiveRecord::Migration
  def change
    create_table :seat_photos do |t|
      t.string :image
      t.string :caption
      t.boolean :default_photo, default: false
      t.integer :user_id
      t.integer :seat_id

      t.timestamps 
    end
  end
end
