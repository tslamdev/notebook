Notebook::Application.routes.draw do

  resources :notes


  root to: "pages#mockup"

  get '/mockup' => 'pages#mockup'


end
