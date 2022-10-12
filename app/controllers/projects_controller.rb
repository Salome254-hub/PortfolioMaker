class ProjectsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    #get the projects from the database with th index action 
    def index 
    project=Project.all 
    render json: project, status: :ok 
    end
    #create a new project
    def create
     project=Project.create(project_params)
     render json: project, status: :created
    end
    #Edit an existing project 
    def update 
        project=find_project 
        if project.update(project_params)
            render json: project
        else 
            render json: {errors: ["validation errors"]}
        end
    end
    #Delete a project
    def destroy
      project=find_project
      project.destroy
      head :no_content
    end
     private 
    def find_project 
      Project.find(params[:id])
    end
    def project_params 
     params.permit(:project_title, :project_link, :image_url, :user_id)
<<<<<<< HEAD
    end 
    def render_not_found_response
     render json: { error: "Project not found"}, status: :not_found
    end
=======
>>>>>>> 04e93c13c816283c8178a8354ecdf74c9bcb685e
end
