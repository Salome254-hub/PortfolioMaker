class SignupsController < ApplicationController
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
    
    private
    def signup_params
        params.permit(:email, :password, :password_confirmation)
    end
end
