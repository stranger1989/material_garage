class Item < ApplicationRecord
  belongs_to :user
  mount_uploader :image_url, ImageUploader
end
