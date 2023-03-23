class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.integer :room_no
      t.integer :apartment_id

      t.timestamps
    end
  end
end
