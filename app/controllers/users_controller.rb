class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # rescure_from ActiveRecord::RecordNotFound,
    def create 
        users = User.create(user_params)
        render json: users, status: :created
    end

    def index
    user= User.all
    render json: user, status: :ok
    end

    def show
    user= User.find(params[:id])
    render json: user, status: :ok
    end

    private 
    
    def user_params
    params.permit(:first_name, :last_name, :email, :age, :location, :profile_url, :title, :description, :phone_number, :linkedin_link, :github_link, :signup_id)
    end
 
    def render_not_found_response
     render json: { error: "User not found"}, status: :not_found
    end
    end
