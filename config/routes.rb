Rails.application.routes.draw do
  resources :users
  resources :tenants
  resources :rooms
  resources :payments
  resources :landlords
  resources :apartments
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
