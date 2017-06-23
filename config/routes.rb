Rails.application.routes.draw do
  get '/people' => 'peoples#index'
  namespace :api do
    namespace :v1 do
      get '/people' => 'peoples#index'
      post '/people' => 'peoples#create'
      get '/people/:id' => 'peoples#show'
      patch '/people/:id' => 'peoples#edit'
      delete '/people/:id' => 'peoples#destroy'
    end
  end
end
