class AddAnimalToSightings < ActiveRecord::Migration
  def change
    add_reference :sightings, :animal, index: true, foreign_key: true
  end
end
