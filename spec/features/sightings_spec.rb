require 'rails_helper'

RSpec.feature "Sightings", type: :feature do
  context 'Going to sightings page' do
    Steps 'Seeing sightings list' do
      Given 'I am on the sightings page' do
        visit '/sightings'
      end
      Then 'I can see a title to the page' do
        expect(page).to have_content('Listing Sightings')
      end
      And 'I can see five columns: Animal, Date, Time, Latitude, and Longitude' do
        expect(page).to have_content('Animal')
        expect(page).to have_content('Date')
        expect(page).to have_content('Time')
        expect(page).to have_content('Latitude')
        expect(page).to have_content('Longitude')
      end
    end
  end
end
