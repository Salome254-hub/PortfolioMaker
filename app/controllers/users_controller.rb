class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create 
        users = User.create(user_params)
        render json: users, status :created
    end

 private 
 
 def user_params
    params.permit(:first_name, :last_name, :email, :age, :location, :profile_url, :title, :description, :phone_number, :linkedin_link, :github_link, :sign_up)
 end
 
def render_not_found_response
     render json: { error: "User not found"}, status: :not_found
    end
end
