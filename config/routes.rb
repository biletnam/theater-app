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

  get 'venues/:id/reviews' => 'reviews#index'
  get 'venues/:id/reviews/new' => 'reviews#new'
  post 'venues/:id/reviews' => 'reviews#create'
  get 'venues/:id/reviews/:id' => 'reviews#show'
  get 'venues/:id/reviews/:id/edit' => 'reviews#edit'
  patch 'venues/:id/reviews/:id' => 'reviews#update'
  delete 'venues/:id/reviews/:id' => 'reviews#destroy'

  get 'venues/:id/seats' => 'seats#index'
  get 'venues/:id/seats/new' => 'seats#new'
  post 'venues/:id/seats' => 'seats#create'


end
