class Project < ApplicationRecord
    #specify the association between the model and other models
    belongs_to :user 
    #specify validation requirements for the model
    validates :project_title, presence: true 
    validates :project_link, presence: true  
    validates :image_url, presence: true
end
