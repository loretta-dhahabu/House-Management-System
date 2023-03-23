class CreateLandlords < ActiveRecord::Migration[6.1]
  def change
    create_table :landlords do |t|
      t.string :name
      t.integer :user_id
      t.string :email
      t.integer :phone_number

      t.timestamps
    end
  end
end
