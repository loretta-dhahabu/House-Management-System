class TenantSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :gender, :contact_integer, :room_id
end
