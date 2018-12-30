class ItemsController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def new
    @item = Item.new
  end

  def create
    Item.create(create_params)
    redirect_to action: :index
  end

  private
  def create_params
    params.require(:item).permit(:name,:image_url,:storage,:memo).merge(user_id:current_user.id)
  end

end
