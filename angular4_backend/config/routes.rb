Rails.application.routes.draw do
  resources :products

  post '/products/upload_image/:id', to: 'products#upload_image'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
