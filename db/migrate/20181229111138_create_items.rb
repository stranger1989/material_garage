class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.text :name
      t.text :image_url
      t.text :storage
      t.text :memo
      t.text :QRcode_url
      t.timestamps
    end
  end
end
