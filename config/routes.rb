Rails.application.routes.draw do
  resources :clients, only: [;index, :create, :show]
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :services, only: [:create, :index, :destroy, :update, :show]

  
end
