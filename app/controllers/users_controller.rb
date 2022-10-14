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
    render json: user, include: :projects, status: :ok
    end

    def get_user
        user=User.find_by(signup_id: session[:signup_id])
        render json:{user: user}, status: :ok
    end

    def check_progress
        count=0;
        user=User.find_by(signup_id: session[:signup_id])
        if user
          count=count+33
          service= Service.find_by(user_id: user.id)
          if service
           count=count+33
          end
          project=Project.find_by(user_id: user.id)
          if project
           count=count+34
          end
        render json:{count:count}, status: :ok

        else
            render json:{count:0}, status: :ok
        end
        end
    private 
    
    def user_params
    params.permit(:first_name, :last_name, :email, :age, :location, :profile_url, :title, :description, :phone_number, :linkedin_link, :github_link, :signup_id)
    end
 
    def render_not_found_response
     render json: { error: "User not found"}, status: :not_found
    end

  


    end
