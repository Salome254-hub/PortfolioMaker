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
validates :description,presence: true,length: {minimum: 30}
validates :title,presence: true 
validates :github_link,presence: true 
validates :linkedin_link,presence: true 

end
