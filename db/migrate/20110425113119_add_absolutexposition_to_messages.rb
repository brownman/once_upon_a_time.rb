class AddAbsolutexpositionToMessages < ActiveRecord::Migration
  def self.up
    add_column :messages, :ab_x, :integer
  end

  def self.down
    remove_column :messages, :ab_x
  end
end
