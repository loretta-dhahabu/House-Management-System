class ApartmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :price, :landlord_id
end
