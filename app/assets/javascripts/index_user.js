$(document).on("turbolinks:load", function(){
  function addUser(user){
  var html=`<div class="chat-group-user clearfix">
              <p class="chat-group-user__name">${user.name}</p>
              <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</div>
            </div>`
      $('#user-search-result').append(html);
  }

  function removeUser(user_id,user_name){
    var html=`<div class='chat-group-user'>
                <input name='group[user_ids][]' type='hidden' value="${user_id}">
                <p class='chat-group-user__name'>${user_name}</p>
                <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
              </div>`
      $('#user-chat-menber').append(html);
  }
  $('#user-search-field').on("input",function(e){
    e.preventDefault();
    var input = $('#user-search-field').val();
    if (input == ""){
      e.preventDefault();
      $('#user-search-result').empty();
    }else{
    $.ajax({
      type: 'get',
      url: '/users',
      data: {keyword: input},
      dataType: 'json'
    })
   

    .done(function(users){
      $('#user-search-result').empty();
      if (users.length != 0){
        users.forEach(function (user){
       addUser(user)
        });
      }else{
        $('#user-search-result').append("一致するユーザーはいません");
      };
    })
    .fail(function(){
      alert('検索に失敗しました')
    });
    }
  });

  $('#user-search-result').on("click", ".user-search-add", function(e){
    e.preventDefault();
    $(this).parent().remove();
    var user_id=$(this).attr("data-user-id")
    var user_name =$(this).attr("data-user-name")

    removeUser(user_id,user_name);
  });

  $('.chat-group-form__field--right').on('click',".user-search-remove",function(e){
    e.preventDefault();
    $(this).parent().remove();
  })

});