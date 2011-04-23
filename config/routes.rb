Messenger::Application.routes.draw do
  resources :users

  resources :messages
  root :to => 'messages#index'
end
