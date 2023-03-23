class CreateApartments < ActiveRecord::Migration[6.1]
  def change
    create_table :apartments do |t|
      t.string :name
      t.string :image
      t.string :description
      t.integer :price
      t.integer :landlord_id

      t.timestamps
    end
  end
end
