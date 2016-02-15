Rails.application.routes.draw do
  devise_for :users
  root "venues#index"

  devise_scope :user do
   authenticated :user do
     root 'links#index', as: :authenticated_root
   end

   unauthenticated do
     root 'devise/registrations#new', as: :unauthenticated_root
   end
  end


  get '/' => 'venues#index'
  get '/venues' => 'venues#index'
  get '/venues/new' => 'venues#new'
  post '/venues' => 'venues#create'
  get '/venues/:id' => 'venues#show'
  get '/venues/:id/edit' => 'venues#edit'
  patch '/venues/:id' => 'venues#update'
  delete '/venues/:id' => 'venues#destroy'

  get '/events' => 'events#index'
  post '/venues/:id/events' => 'events#create'
  get '/venues/:id/events/:id' => 'events#show'

  get '/venues/:id/events/:id/scheduled_events' => 'scheduled_events#index'
  post '/venues/:id/events/:id/scheduled_events' => 'scheduled_events#create'
  get '/venues/:id/events/:id/scheduled_events/:id' => 'scheduled_events#show'


end
