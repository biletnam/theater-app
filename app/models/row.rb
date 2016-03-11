class Row < ActiveRecord::Base
  has_many :seats
  belongs_to :section
  belongs_to :venue
end
