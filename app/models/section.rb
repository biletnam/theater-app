class Section < ActiveRecord::Base
  has_many :seats
  has_many :rows
  belongs_to :venue
end
