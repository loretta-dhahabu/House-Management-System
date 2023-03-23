class Tenant < ApplicationRecord
    belongs_to :room
    has_one :payment
    

    validates :age, numericality: { greater_than_or_equal_to: 18 }
    validates :gender, inclusion: {in: %w(Male Female)}
end
