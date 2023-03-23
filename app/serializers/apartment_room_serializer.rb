class ApartmentRoomSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :price, :landlord_id

  has_many :rooms
end
