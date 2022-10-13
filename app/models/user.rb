class User < ApplicationRecord
belongs_to :signup
has_many :services
has_many :projects

validates :first_name,presence: true 
validates :last_name,presence: true 
validates :email,presence: true, uniqueness: true
validates :age,presence: true,length: {maximum: 3}
validates :phone_number,presence: true,length: {maximum: 10}
validates :location,presence: true 
validates :profile_url,presence: true 
validates :description,presence: true,length: {minimum: 20}
validates :title,presence: true 
validates :github_link,presence: true 
validates :linkedin_link,presence: true 

# def check_profile_percentage
    
#         count=0;
#         user=User.find_by(signup_id: session[:signup_id])
#         if user
#           count=count+33
       

#         end
#          service= Service.find_by(user_id: user.id)
#          if service
#           count=count+33
         
#          end
#          project=Project.find_by(user_id: user.id
#          if project
#           count=count+33
    
#          end
#          render json:{count:count}, status: :ok
#         end
   
# end
end
