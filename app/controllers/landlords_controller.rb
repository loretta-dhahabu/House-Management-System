class LandlordsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :landlord_not_found

    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
  
    skip_before_action :authenticate, only: [:index, :show, :create, :update]
    
    # GET /landlords
    def index
      landlords = Landlord.all
      render json: landlords
    end
  
    #  GET /landlords/:id
    def show
      landlord = Landlord.find_by(id: params[:id])
      render json: landlord, status: :ok
    end
  
  
    # POST/landlords
    def create
      landlord = Landlord.create!(landlord_params)
      render json: landlord, status: :created
    end
  
    # PATCH /landlords/:id
    def update
      #f ind
      landlord = Landlord.find(params[:id])
      # update
      landlord.update!(landlord_params)
      render json: landlord
    end
  
    private
  
    def landlord_params
      params.permit(:id, :user_id, :name, :phone_number, :email)
    end
  
    def unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
  
    def landlord_not_found
      render json: { error: "landlord not found" }, status: :not_found
    end
  end
  
