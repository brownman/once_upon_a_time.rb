Messenger::Application.routes.draw do
  resources :users

  resources :messages



 get "pages/home"
  get "pages/contact"
   get "pages/about"
  root :to => 'users#index'

end
