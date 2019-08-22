class GroupUser < ApplicationRecord
  has_many :groupUsers
  belongs_to :user
  belongs_to :group
end
