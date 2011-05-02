class Message < ActiveRecord::Base
  has_ancestry
#  attr_accessor :ab_x

end


# == Schema Information
#
# Table name: messages
#
#  id         :integer         not null, primary key
#  content    :text
#  created_at :datetime
#  updated_at :datetime
#  ancestry   :string(255)
#  x          :integer
#  y          :integer
#  ab_x       :integer
#

