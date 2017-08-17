Dir["#{File.dirname(__FILE__)}/event_handlers/*.rb"].each do |file|
  require file
end


class EventBus

  class << self

    def handler(event_name)
      bus = {
        'user_created' => 'UserCreatedEventHandler'
      }

      bus.fetch(event_name).constantize.new
    end

  end
end