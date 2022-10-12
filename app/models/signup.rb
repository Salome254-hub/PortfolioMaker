class Signup < ApplicationRecord
    #association 
    has_one :user 
     #validates the email 
     validates :email, presence: true, uniqueness: true 
     has_secure_password
end
