class Room < ApplicationRecord
    belongs_to :apartment

    has_one :tenant
end
