Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "user#index"
  
  get "/users", to: "users#index"
  get "/users/new", to: "users#new"
  post "/users", to: "users#create"

end
