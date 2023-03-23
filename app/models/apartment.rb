class Apartment < ApplicationRecord
    belongs_to :landlord

    has_many :rooms

    validates :price, presence: true, numericality: { greater_than: 8000, less_than: 20000 }
end
