class SignupsController < ApplicationController
    # before_action :create
    
  #create a user signup action 
  def index
    signup=Signup.all
    render :json=>signup
  end
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
        user=User.find_by(signup_id: signup.id)
        service=Service.where(user_id: user.id)
        project=Project.where(user_id: user.id)
     
          render json:{signup:signup,user:user, project:project, service:service}, status: :ok
        # else
        #   render json: { error: "Not authorized" }, status: :unauthorized
        # end
      end
    
      
    private
    def signup_params
        params.permit(:email, :password, :password_confirmation)
    end
end
