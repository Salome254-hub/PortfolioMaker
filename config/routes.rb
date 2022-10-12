Rails.application.routes.draw do
  resources :signups
  resources :projects
  post '/signup', to: 'signups#create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :services, only: [:create, :index, :destroy, :update, :show]

  
end
