class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :service_title
      t.string :description
      t.integer :user_id

      t.timestamps
    end
  end
end
