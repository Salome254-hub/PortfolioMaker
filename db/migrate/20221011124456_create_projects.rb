class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :project_title
      t.string :project_link
      t.string :image_url
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
