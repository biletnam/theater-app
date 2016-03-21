class AddTwitterHandleToSgDbVenues < ActiveRecord::Migration
  def change
    add_column :sg_db_venues, :twitter_handle, :string
  end
end
