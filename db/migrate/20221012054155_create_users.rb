class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :age
      t.string :location
      t.string :profile_url
      t.string :title
      t.string :description
      t.integer :phone_number
      t.string :linkedin_link
      t.string :github_link
      t.integer :signup_id, null: false
      t.timestamps
    end
  end
end
