class User < ActiveRecord::Base


  has_many :microposts

end


# == Schema Information
#
# Table name: users
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  email      :string(255)
#  created_at :datetime
#  updated_at :datetime
#  position_x :integer
#  position_y :integer
#  position_z :integer
#  status     :string(255)
#

