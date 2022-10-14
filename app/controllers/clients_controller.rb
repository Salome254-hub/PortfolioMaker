class ClientsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        client = Client.all.count
        render json: {count_messages: client}
    end

    def create
        client = Client.create(client_params)
        render json: client, status: :created
    end

    def show
        client = Client.find(params[:id])
        render json: client, status: :ok
    end


    private

    def client_params
        params.permit(:name, :subject, :email, :user_id)
    end

    def render_not_found_response
        render json: { error: "Client not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
