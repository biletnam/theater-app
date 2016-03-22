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

  namespace :api do
    namespace :v1 do
      get '/sections' => 'sections#index'
      get '/seats' => 'seats#index'
      get '/venues' => 'venues#index'
      get '/venues/:id' => 'venues#show'
      get '/sg_db_venues/:id' => 'sg_db_venues#show'
    end
  end

  get '/' => 'venues#index'
  get '/all_current' => 'venues#full_index'
  get '/venues' => 'venues#index'
  get '/venues/new' => 'venues#new'
  post '/venues' => 'venues#create'
  get '/venues/:id' => 'venues#show'
  get '/venues/:id/edit' => 'venues#edit'
  patch '/venues/:id' => 'venues#update'
  delete '/venues/:id' => 'venues#destroy'

  get '/venue_name_search' => 'venues#venue_name_search'
  post '/venue_name_search_result' => 'venues#venue_name_search_result'
  get '/venue_zip_search' => 'venues#venue_zip_search'
  post '/venue_zip_search_result' => 'venues#venue_zip_search_result'
  get '/event_search' => 'venues#event_zip_search'  
  post '/event_search_result' => 'venues#event_search'
  get '/restaurant_details/:place_id' => 'venues#restaurant_details'

  get '/events' => 'events#index'
  get 'venues/:id/events/new' => 'events#new'
  post '/venues/:id/events' => 'events#create'
  get '/venues/:id/events/:id' => 'events#show'
  get '/venues/:id/events/:id/edit' => 'events#edit'
  patch '/venues/:id/events/:id' => 'events#update'
  delete '/venues/:id/events/:id' => 'events#destroy'

  get '/scheduled_events' => 'scheduled_events#index'
  post '/venues/:id/events/:id/scheduled_events' => 'scheduled_events#create'
  get '/venues/:id/events/:id/scheduled_events/:id' => 'scheduled_events#show'
  get '/venues/:id/events/:id/scheduled_events/:id/edit' => 'scheduled_events#edit'
  patch '/venues/:id/events/:id/scheduled_events/:id' => 'scheduled_events#update'
  delete '/venues/:id/events/:id/scheduled_events/:id' => 'scheduled_events#destroy'

  get '/venues/:id/reviews/new' => 'reviews#new'
  post '/venues/:id/reviews' => 'reviews#create'
  get '/venues/:id/reviews/:id/edit' => 'reviews#edit'
  patch '/venues/:id/reviews/:id' => 'reviews#update'
  delete '/venues/:id/reviews/:id' => 'reviews#destroy'

  get '/venues/:id/seats' => 'seats#index'
  get '/venues/:id/seats/new' => 'seats#new'
  post '/venues/:id/seats' => 'seats#create'
  get '/venues/:id/seats/:id/edit' => 'seats#edit'
  patch '/venues/:id/seats/:id' => 'seats#update'
  delete '/venues/:id/seats/:id' => 'seats#destroy'

  get '/seats/:id/seat_photos' => 'seat_photos#index'
  get '/seats/:id/seat_photos/new' => 'seat_photos#new'
  post '/seats/:id/seat_photos' => 'seat_photos#create'
  get '/seats/:id/seat_photos/:id' => 'seat_photos#show'
  get '/seats/:id/seat_photos/:id/edit' => 'seat_photos#edit'
  patch '/seats/:id/seat_photos/:id' => 'seat_photos#update'
  delete '/seats/:id/seat_photos/:id' => 'seat_photos#destroy'

  get '/venues/:id/restaurants/new' => 'restaurants#new'
  post '/venues/:id/restaurants' => 'restaurants#create'
  get '/venues/:id/restaurants/:id' => 'restaurants#show'
  get '/venues/:id/restaurants/:id/edit' => 'restaurants#edit'
  patch '/venues/:id/restaurants/:id' => 'restaurants#update'
  delete '/venues/:id/restaurants/:id' => 'restaurants#destroy'

  get '/sg_venues' => 'sg_venues#index'
  get '/sg_venues/new/:id' => 'sg_venues#new'
  post '/sg_venues' => 'sg_venues#create'
  get '/sg_venues/:id' => 'sg_venues#show'
  get '/sg_venues/:id/edit' => 'sg_venues#edit'
  patch '/sg_venues/:id' => 'sg_venues#update'
  delete '/sg_venues/:id' => 'sg_venues#destroy'
  post '/sg_venue_search' => 'sg_venues#sg_venue_search'

  get '/sg_db_venues' => 'sg_db_venues#index'
  get '/sg_db_venues/new' => 'sg_db_venues#new'
  post '/sg_db_venues' => 'sg_db_venues#create'
  get '/sg_db_venues/:id' => 'sg_db_venues#show'
  get '/sg_db_venues/:id/edit' => 'sg_db_venues#edit'
  patch '/sg_db_venues/:id' => 'sg_db_venues#update'
  delete '/sg_db_venues/:id' => 'sg_db_venues#destroy'

  get '/sg_db_venues/:id/sg_seats' => 'sg_seats#index'
  get '/sg_db_venues/:id/sg_seats/new' => 'sg_seats#new'
  post '/sg_db_venues/:id/sg_seats' => 'sg_seats#create'
  get '/sg_db_venues/:id/sg_seats/:id/edit' => 'sg_seats#edit'
  patch '/sg_db_venues/:id/sg_seats/:id' => 'sg_seats#update'
  delete '/sg_db_venues/:id/sg_seats/:id' => 'sg_seats#destroy'

  get '/sg_seats/:id/sg_seat_photos' => 'sg_seat_photos#index'
  get '/sg_seats/:id/sg_seat_photos/new' => 'sg_seat_photos#new'
  post '/sg_seats/:id/sg_seat_photos' => 'sg_seat_photos#create'
  get '/sg_seats/:id/sg_seat_photos/:id' => 'sg_seat_photos#show'
  get '/sg_seats/:id/sg_seat_photos/:id/edit' => 'sg_seat_photos#edit'
  patch '/sg_seats/:id/sg_seat_photos/:id' => 'sg_seat_photos#update'
  delete '/sg_seats/:id/sg_seat_photos/:id' => 'sg_seat_photos#destroy'

  get '/sg_db_venues/:id/sg_reviews/new' => 'sg_reviews#new'
  post '/sg_db_venues/:id/sg_reviews' => 'sg_reviews#create'
  get '/sg_db_venues/:id/sg_reviews/:id/edit' => 'sg_reviews#edit'
  patch '/sg_db_venues/:id/sg_reviews/:id' => 'sg_reviews#update'
  delete '/sg_db_venues/:id/sg_reviews/:id' => 'sg_reviews#destroy'

  get '/venues/:id/sections' => 'sections#index'
  get '/venues/:id/sections/new' => 'sections#new'
  post '/venues/:id/sections' => 'sections#create'
  get '/venues/:id/sections/:id/edit' => 'sections#edit'
  patch '/venues/:id/sections/:id' => 'sections#update'
  delete '/venues/:id/sections/:id' => 'sections#destroy'

  get '/sections/:id/rows' => 'rows#index'
  get '/sections/:id/rows/new' => 'rows#new'
  post '/sections/:id/rows/' => 'rows#create'
  get '/sections/:id/rows/:id' => 'rows#show'
  get '/sections/:id/rows/:id/edit' => 'rows#edit'
  patch '/sections/:id/rows/:id' => 'rows#update'
  delete '/sections/:id/rows/:id' => 'rows#destroy'

  get '/sg_db_venues/:id/sg_sections' => 'sg_sections#index'
  get '/sg_db_venues/:id/sg_sections/new' => 'sg_sections#new'
  post '/sg_db_venues/:id/sg_sections' => 'sg_sections#create'
  get '/sg_db_venues/:id/sg_sections/:id/edit' => 'sg_sections#edit'
  patch '/sg_db_venues/:id/sg_sections/:id' => 'sg_sections#update'
  delete '/sg_db_venues/:id/sg_sections/:id' => 'sg_sections#destroy'

  get '/sg_sections/:id/sg_rows' => 'sg_rows#index'
  get '/sg_sections/:id/sg_rows/new' => 'sg_rows#new'
  post '/sg_sections/:id/sg_rows/' => 'sg_rows#create'
  get '/sg_sections/:id/sg_rows/:id' => 'sg_rows#show'
  get '/sg_sections/:id/sg_rows/:id/edit' => 'sg_rows#edit'
  patch '/sg_sections/:id/sg_rows/:id' => 'sg_rows#update'
  delete '/sg_sections/:id/sg_rows/:id' => 'sg_rows#destroy'

  get '/contact_us' => 'messages#new'
  post '/messages' => 'messages#create'
  get '/message_success' => 'messages#message_success'

  get '/vendor_request' => 'vendors#new'
  post '/vendors' => 'vendors#create'
  get '/message_sent' => 'vendors#message_success'


end
