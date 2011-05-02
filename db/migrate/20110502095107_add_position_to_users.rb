class AddPositionToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :position_x, :integer
    add_column :users, :position_y, :integers
    add_column :users, :position_z, :integer
  end

  def self.down
    remove_column :users, :position_z
    remove_column :users, :position_y
    remove_column :users, :position_x
  end
end
