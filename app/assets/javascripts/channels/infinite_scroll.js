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

  var loadingImage = $(".loadingBox").detach();
  $(window).on("load", function() {
    var page = 1;
    var flag = false;
    var ajax_data = false;
    var timeoutId;
    $(window).scroll(function() {
        if ($(document).height() - $(window).height() - $(window).scrollTop() < 50 && !flag) {
            loadingImage.appendTo('.itemList')
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function(){
              page++
              $.ajax({
                url: "/",
                type: "GET",
                dataType: "json",
                data: { "page": page }
              }).done(function(data){
                $.each(data, function(i, item) {
                  appenditem(item);
                  $(`[data-id=${item.id}]`).hide().fadeIn(500);
                });
                data.length > 0 ? flag = false : flag = true;
                loadingImage = $(".loadingBox").detach();
              }).fail(function(xhr, status, error){
                console.log("エラー")
              });
            }, 1000);
        }
    });
  });
});
