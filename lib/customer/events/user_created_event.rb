# frozen_string_literal: true

module Customer
  module Events
    class UserCreatedEvent < Infrastructure::Event
      attribute :name, T::String
      attribute :email, T::Email
    end
  end
end
