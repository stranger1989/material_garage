class ApplicationController < ActionController::Base
  layout :layout_by_resource
  before_action :configure_permitted_parameters, if: :devise_controller?

  def layout_by_resource
    if devise_controller?
      "layout_for_devise"
    else
      "application"
    end
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end
