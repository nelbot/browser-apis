Rails.application.routes.draw do
  get '/geolocation' => 'browser_apis#geolocation'
  get 'local_storage' => 'browser_apis#local_storage'
end
