class SgSeatPhoto < ActiveRecord::Migration
  def change
    create_table :sg_seat_photos do |t|
      t.string :image
      t.string :caption
      t.boolean :default_photo, default: false
      t.integer :user_id
      t.integer :sg_seat_id
      t.integer :sg_venue_id

      t.timestamps
    end
  end
end
