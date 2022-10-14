Rails.application.routes.draw do
  resources :signups
  resources :projects
  post '/signup', to: 'signups#create'
  post '/login', to:'sessions#create'
  get "/me", to: "signups#show"
  delete "/log_out", to: "sessions#destroy"
  get "/check_profile_percentage", to: "sessions#show"
  get "/get_user", to: "users#get_user"
  get "/check_progress", to: "users#check_progress"


  resources :clients, only: [:index, :create, :show]
  resources :users ,only: [:index, :create ,:show, ]
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  resources :services, only: [:create, :index, :destroy, :update, :show]
  
end
