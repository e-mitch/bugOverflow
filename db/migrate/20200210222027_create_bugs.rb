class CreateBugs < ActiveRecord::Migration[6.0]
  def change
    create_table :bugs do |t|
      t.string :title
      t.string :text
      t.text :description
      t.string :issue_type
      t.string :priority
      t.string :status

      t.timestamps
    end
  end
end
