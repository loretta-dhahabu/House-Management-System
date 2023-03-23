Rails.application.routes.draw do
  namespace :api do
    resources :users,  only: [:index, :show, :create, :update, :destroy]

    resources :tenants, only: [:index, :show, :create, :update, :destroy]

    resources :rooms, only: [:index, :show, :create, :update, :destroy]

    resources :payments, only: [:index, :show, :create, :update, :destroy]

    resources :landlords, only: [:index, :show, :create, :update, :destroy]

    resources :apartments, only: [:index, :show, :create, :update, :destroy]

  post "/signup", to: "users#create"

  # get "/me", to: "users#show"

  post "login", to: "sessions#create"
  
  delete "logout", to: "sessions#destroy"

  # resources :houses, only: [:index, :show, :create, :update, :destroy]
end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
