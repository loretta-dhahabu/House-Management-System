class HouseTenantSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :gender, :contact, :room_id

  belongs_to :room
  has_one :payment
end
