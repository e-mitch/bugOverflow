Rails.application.routes.draw do
  resources :users
  get 'welcome/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :bugs do
    resources :users
  end
  root 'home#index'
end
