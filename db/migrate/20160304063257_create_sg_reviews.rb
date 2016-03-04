class CreateSgReviews < ActiveRecord::Migration
  def change
    create_table :sg_reviews do |t|
      t.text :content
      t.integer :sg_db_venue_id
      t.integer :sg_venue_id
      t.integer :user_id

      t.timestamps 
    end
  end
end
