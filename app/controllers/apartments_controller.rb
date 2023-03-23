class ApartmentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :apartment_not_found

    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
  
    skip_before_action :authenticate, only: [:index, :show, :create, :update]
  
    # GET /apartments
    def index
      apartments = Apartment.all
      render json: apartments
    end
  
    #  GET /apartments/:id
    def show
      apartment = Apartment.find(params[:id])
      render json: apartment, serializer: ApartmentRoomSerializer, status: :ok
    end
  
    # PATCH /apartments/:id
    def update
      apartment = Apartment.find(params[:id])
      apartment.update!(apartment_params)
      render json: apartment
    end
  
    private
  
    def apartment_params
      params.require(:apartment).permit(:id, :name, :image, :description, :price)
    end
  
    def unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  
    def apartment_not_found
      render json: { error: "apartment not found" }, status: :not_found
    end
  end
  
