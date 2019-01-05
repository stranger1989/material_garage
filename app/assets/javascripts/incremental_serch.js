$(function(){

  var search_list = $(".itemList");

  function appenditem(item) {
     var html =`<div class='itemList__element element' data-id='${ item.id }'>
                  <div class='element__itemImage' style='background-image: url(${ item.image_url.url }) '></div>
                  <a class="element__itemName" href="/items/${ item.id }">${ item.name }</a>
                  <div class='element__itemStorage'>${ item.storage }</div>
                  <hr>
                  <a class="element__itemDelete" rel="nofollow" data-method="delete" href="/items/${ item.id }">削除</a>
                  <a class="element__itemEdit" href="/items/${ item.id }/edit">編集</a>
                  <a class="element__itemLink" href="/items/${ item.id }"></a>
                </div>`
      search_list.append(html);
   }

  function appendNoitem(item) {
    var html = `<div>
                  ${ item }
                </div>`
    search_list.append(html);
  }

  $(".searchInput").on("keyup", function() {
    var input = $(".searchInput").val();
    $.ajax({
      type: 'GET',
      url: '/items',
      data: { keyword: input },
      dataType: 'json'
    })
   .done(function(items) {
     search_list.empty();
     if (items.length !== 0) {
       items.forEach(function(item){
         appenditem(item);
       });
     }
     else {
       appendNoitem("一致するアイテムはありません");
     }
   })
  .fail(function(XMLHttpRequest, textStatus, errorThrown) {
    alert('アイテム検索に失敗しました');
  })
  });

  $(".searchInputSide").on("keyup", function() {
    var input = $(".searchInputSide").val();
    $.ajax({
      type: 'GET',
      url: '/items',
      data: { keyword: input },
      dataType: 'json'
    })
   .done(function(items) {
     search_list.empty();
     if (items.length !== 0) {
       items.forEach(function(item){
         appenditem(item);
       });
     }
     else {
       appendNoitem("一致するアイテムはありません");
     }
   })
  .fail(function(XMLHttpRequest, textStatus, errorThrown) {
    alert('アイテム検索に失敗しました');
  })
  });

});
