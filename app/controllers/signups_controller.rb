class SignupsController < ApplicationController
    # before_action :create
    
  #create a user signup action 
    def create
        signup = Signup.create(signup_params);
        if signup.valid?
            session[:signup_id] = signup.id;
            render json: signup, status: :created
        else
            render json: { errors: signup.errors.full_messages }, status: :unprocessable_entity
        end
    end
    def show
        signup = Signup.find_by(id: session[:signup_id])
        if signup
          render json: signup
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end
    
      
    private
    def signup_params
        params.permit(:email, :password, :password_confirmation)
    end
end
