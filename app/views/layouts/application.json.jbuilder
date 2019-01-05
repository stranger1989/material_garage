json.array! @items do |item|
  json.id item.id
  json.name item.name
  json.storage item.storage
  json.image_url item.image_url
end
