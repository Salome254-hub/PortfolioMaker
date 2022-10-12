class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :subject
      t.string :email
      t.string :message
      t.integer :user_id

      t.timestamps
    end
  end
end
