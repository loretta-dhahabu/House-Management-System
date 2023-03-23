class Api::TenantsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :tenant_not_found

    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
  
    skip_before_action :authenticate, only: [:index, :show, :create, :update, :destroy]
  
    # GET /tenants
    def index
      tenants = Tenant.all
      render json: tenants
    end
  
    #  GET /tenants/:id
    def show
      tenant = Tenant.find(params[:id])
      render json: tenant, serializer: HouseTenantSerializer, status: :ok
    end
  
    # POST/tenants
    def create
      tenant = Tenant.create!(tenant_params)
      render json: tenant, status: :created
    end
  
    # PATCH /tenants/:id
    def update
      #find
      tenant = Tenant.find(params[:id])
      tenant.update!(tenant_params)
      render json: tenant, serializer: HouseTenantSerializer, status: :ok
    end
  
    # DELETE /tenants/:id
      def destroy
          # find
          tenant = Tenant.find(params[:id])
          # delete
          tenant.destroy
          head :no_content
      end
  
    private
  
    def tenant_params
      params.permit(:id, :name, :age, :gender, :contact, :room_id, :rooms)
    end
  
    def unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  
    def tenant_not_found
      render json: { error: "tenant not found" }, status: :not_found
    end
  end
  
