class LandlordSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :email, :phone_number
end
