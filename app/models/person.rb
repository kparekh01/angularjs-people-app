class Person < ApplicationRecord
  validates :bio, :name, presence: true
end
