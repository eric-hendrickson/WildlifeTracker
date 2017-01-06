class SightingDateAndTimeValidator < ActiveModel::Validator
  def validate(record)
    if record.date > Date.today
      record.errors.add(:max_date, "date can't be later than now")
    end
    if record.date >= Date.today && record.time > Time.now
      record.errors.add(:max_time, "time can't be later than now")
    end
  end
end

class Sighting < ActiveRecord::Base
  belongs_to :animal

  validates_with SightingDateAndTimeValidator
  validates :latitude, presence: true
  validates :longitude, presence: true

end
