class CreateSightings < ActiveRecord::Migration
  def change
    create_table :sightings do |t|
      t.date :date
      t.time :time
      t.float :latitude
      t.float :longitude

      t.timestamps null: false
    end
  end
end
