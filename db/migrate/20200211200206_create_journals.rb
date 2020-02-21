class CreateJournals < ActiveRecord::Migration[6.0]
  def change
    create_table :journals do |t|
      t.string :title
      t.text :description
      t.text :body
      t.integer :liked
      t.integer :dislike
      t.string :tags

      t.timestamps
    end
  end
end
