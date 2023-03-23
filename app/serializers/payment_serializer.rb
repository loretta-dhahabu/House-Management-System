class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :tenant_id, :invoice_no, :amount_paid, :date
end
