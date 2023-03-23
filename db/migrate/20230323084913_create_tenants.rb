class CreateTenants < ActiveRecord::Migration[6.1]
  def change
    create_table :tenants do |t|
      t.string :name
      t.integer :age
      t.string :gender
      t.string :contact_integer
      t.integer :room_id

      t.timestamps
    end
  end
end
