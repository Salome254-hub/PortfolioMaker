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

      # def show
      #   count=0;
      #   user=User.find_by(signup_id: session[:signup_id])
      #   if user
      #     count=count+33
      #   end
      #    service= Service.find_by(user_id: user.id)
      #    if service
      #     count=count+33
      #    end
      #    project=Project.find_by(user_id: user.id)
      #    if project
      #     count=count+34
       
      #    end
     
    
  
      #   render json:{count:count}, status: :ok

      # end
    end