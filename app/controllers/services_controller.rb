class ServicesController < ApplicationController
    
    
    def index
        service = Service.All
        render json: service, status: :ok
    end

    def show
        service = Service.find(params[:id])
        render json: service
    end

    def create
        service = Service.create(service_params)
        render json: service, status: :created
    end

    def update
        service = find_service
        service.update(service_params)
        render json: service
    end

    def destroy
        service = find_service
        service.destroy
        head :no_content
    end

    private

    def service_params
        params.permit(:description, :user_id, :service_title )
    end

    def find_service
        Service.find(params[:id])
    end
end
 