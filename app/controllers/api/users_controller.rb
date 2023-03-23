class Api::UsersController < ApplicationController
    skip_before_action :authenticate, only: [:create, :index]

    # GET /users
  def index
    users = User.all
    render json: users
  end
  # GET /users/:id
  def show
        user = User.find(session[:user_id])
        if user
            render json: user, status: :created
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    #POST user
      def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    


    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end

