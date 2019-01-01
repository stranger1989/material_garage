class ItemsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_item, only: [:show, :destroy, :edit, :update]

  def index
    @items = Item.where("user_id = ?",current_user.id)
  end

  def show
  end

  def new
    @item = Item.new
  end

  def create
    Item.create(create_params)
    redirect_to action: :index
  end

  def destroy
    @item.destroy if @item.user_id == current_user.id
    redirect_to action: :index
  end

  def update
    @item.update(create_params) if @item.user_id == current_user.id
    redirect_to action: :index
  end

  def edit
  end

  private
  def create_params
    params.require(:item).permit(:name,:image_url,:storage,:memo).merge(user_id:current_user.id)
  end

  def set_item
    @item = Item.find(params[:id])
  end

end
