require 'rails_helper'

RSpec.feature "Animals", type: :feature do

  context 'Going to animals listings' do
    Steps 'Seeing animals page' do
      Given 'I am on the animals page' do
        visit '/animals'
      end
      Then 'I can see a header and a table of animals based on category (common name, latin name, kingdom)' do
        expect(page).to have_content('Listing Animals')
        expect(page).to have_content('Common name')
        expect(page).to have_content('Latin name')
        expect(page).to have_content('Kingdom')
      end
    end

  end
end
