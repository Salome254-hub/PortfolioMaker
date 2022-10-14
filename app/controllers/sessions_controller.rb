class SessionsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

         def create
        signup = Signup.find_by(email: params[:email])
        if signup&.authenticate(params[:password])
          session[:signup_id] = signup.id
          render json: signup, status: :created
        else
          render json: { error: "Invalid email or password" }, status: :unauthorized
        end
      end
        def destroy
        session.delete :signup_id
        head :no_content
        end

     
    end