Rails.application.routes.draw do
  get '/people' => 'peoples#index'
  namespace :api do
    namespace :v1 do
      get '/people' => 'peoples#index'
      get '/people/:id' => 'peoples#show'
    end
  end
end
