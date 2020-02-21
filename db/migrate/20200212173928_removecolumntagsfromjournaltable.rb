class Removecolumntagsfromjournaltable < ActiveRecord::Migration[6.0]
  def change
    remove_column :journals, :tags 
  end
end
