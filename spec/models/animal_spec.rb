require 'rails_helper'

describe 'Animal' do
  it "has to be real" do
    expect{Animal.new}.to_not raise_error
  end
  it "can have an id" do
    animal = Animal.new
    expect(animal).to have_attributes(id: nil)
  end
  it "can be assigned an id" do
    animal = Animal.new
    animal.id = 1
    expect(animal).to have_attributes(id: 1)
  end
  it "can have a common name" do
    animal = Animal.new
    expect(animal).to have_attributes(common_name: nil)
  end
  it "can be assigned a common name" do
    animal = Animal.new
    animal.common_name = "Pig"
    expect(animal).to have_attributes(common_name: "Pig")
  end
  it "can have a latin name" do
    animal = Animal.new
    expect(animal).to have_attributes(latin_name: nil)
  end
  it "can be assigned a latin name" do
    animal = Animal.new
    animal.latin_name = "Chris P. Bacon"
    expect(animal).to have_attributes(latin_name: "Chris P. Bacon")
  end
  it "can have a kingdom" do
    animal = Animal.new
    expect(animal).to have_attributes(kingdom: nil)
  end
  it "can be assigned a common name" do
    animal = Animal.new
    animal.kingdom = "Animal"
    expect(animal).to have_attributes(kingdom: "Animal")
  end
end
