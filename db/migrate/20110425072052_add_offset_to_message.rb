class AddOffsetToMessage < ActiveRecord::Migration
  def self.up
    add_column :messages, :x, :integer
    add_column :messages, :y, :integer
  end

  def self.down
    remove_column :messages, :y
    remove_column :messages, :x
  end
end
