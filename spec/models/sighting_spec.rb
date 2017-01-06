require 'rails_helper'

describe 'Sighting' do
  it "has to be real" do
    expect{Sighting.new}.to_not raise_error
  end
  it "can have an id" do
    sighting = Sighting.new
    expect(sighting).to have_attributes(id: nil)
  end
  it "can be assigned an id" do
    sighting = Sighting.new
    sighting.id = 1
    expect(sighting).to have_attributes(id: 1)
  end
  it "can have a date" do
    sighting = Sighting.new
    expect(sighting).to have_attributes(date: nil)
  end
  it "can be assigned a date" do
    sighting = Sighting.new
    sighting.date = Date.new(2001,2,3)
    expect(sighting).to have_attributes(date: Date.new(2001,2,3))
  end
  it "can have a latitude" do
    sighting = Sighting.new
    expect(sighting).to have_attributes(latitude: nil)
  end
  it "can be assigned a latitude" do
    sighting = Sighting.new
    sighting.latitude = 1
    expect(sighting).to have_attributes(latitude: 1.0)
  end
  it "can have a longitude" do
    sighting = Sighting.new
    expect(sighting).to have_attributes(longitude: nil)
  end
  it "can be assigned a longitude" do
    sighting = Sighting.new
    sighting.longitude = 1
    expect(sighting).to have_attributes(longitude: 1.0)
  end
  it "can have a foreign key for animal" do
    sighting = Sighting.new
    expect(sighting).to have_attributes(animal_id: nil)
  end
  it "can be assigned a foreign animal id" do
    sighting = Sighting.new
    sighting.animal_id = 1
    expect(sighting).to have_attributes(animal_id: 1)
  end
end
