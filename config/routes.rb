Notebook::Application.routes.draw do

  root to: "pages#mockup"

  get '/mockup' => 'pages#mockup'


end
