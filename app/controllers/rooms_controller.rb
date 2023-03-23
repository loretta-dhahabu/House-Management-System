class RoomsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :room_not_found

    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
  
    skip_before_action :authenticate, only: [:index, :show, :create]
    
    # GET /rooms
    def index
      rooms = Room.all
      render json: rooms
    end
  
    #  GET /rooms/:id
    def show
      room = Room.find(params[:id])
      render json: room,  status: :ok
    end
  
    # POST/rooms
    def create
      room = Room.create!(room_params)
      render json: room, status: :created
    end
  
    # PATCH /rooms/:id
    def update
      #find
      room = Room.find(params[:id])
      room.update!(room_params)
      render json: room
    end
  
    # DELETE /rooms/:id
    def destroy
      # find
      room = Room.find(params[:id])
      # delete
      room.destroy
      head :no_content
    end
  
    private
  
    def room_params
      params.permit(:id, :room_no, :apartment_id)
    end
  
    def unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  
    def room_not_found
      render json: { error: "room not found" }, status: :not_found
    end
  end
