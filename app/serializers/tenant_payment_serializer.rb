class TenantPaymentSerializer < ActiveModel::Serializer
  attributes :id, :tenant_id, :invoice_no, :amount_paid, :date

  belongs_to :tenant
end
