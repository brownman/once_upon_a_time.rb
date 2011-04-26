require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  def test_should_be_valid
    assert Message.new.valid?
  end
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
#

