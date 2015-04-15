class BrowserApisController < ApplicationController
  def geolocation
    render(:geolocation)
  end

  def local_storage
    render(:local_storage)
  end
end
