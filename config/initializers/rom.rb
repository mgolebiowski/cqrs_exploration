ROM::Rails::Railtie.configure do |config|
  config.auto_registration_paths += [Rails.root.join('lib/infrastructure')]
  config.gateways[:default] = [
    :sql, "sqlite:/home/michal/repos/cqrs_exploration/db/development.db"
  ]
end
