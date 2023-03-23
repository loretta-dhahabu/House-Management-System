class CreatePayments < ActiveRecord::Migration[6.1]
  def change
    create_table :payments do |t|
      t.integer :tenant_id
      t.integer :invoice_no
      t.integer :amount_paid
      t.date :date

      t.timestamps
    end
  end
end
