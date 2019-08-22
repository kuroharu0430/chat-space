class CreateGroupUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :group_users do |t|
      t.references :user, foreigner_key: true
      t.references :group, foreginer_key: true
      t.timestamps
    end
  end
end
