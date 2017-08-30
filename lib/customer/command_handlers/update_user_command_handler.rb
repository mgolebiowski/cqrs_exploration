# frozen_string_literal: true

require 'customer/domain/user'

module Customer
  module CommandHandlers
    class UpdateUserCommandHandler
      M = Dry::Monads

      class << self
        def execute(command)
          validation_result = command.validate

          return M.Left(validation_result.errors) unless validation_result.success?

          user = Customer::Domain::User.update_user(validation_result.output)
          user.commit

          M.Right(user)
        end
      end
    end
  end
end
