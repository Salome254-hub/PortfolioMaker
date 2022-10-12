class SessionsController < ApplicationController
    def create
        signup = Signup.find_by(email: params[:email])
        if signup&.authenticate(params[:password])
          session[:signup_id] = signup.id
          render json: signup, status: :created
        else
          render json: { error: "Invalid email or password" }, status: :unauthorized
        end
      end
end
