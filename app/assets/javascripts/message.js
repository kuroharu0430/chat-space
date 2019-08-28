
$(function(){
  function buildHTML(message){
    var img ='';
    if (message.image.url){
      img = `<div class="rightcontent__main-message--image" >
            <img src=${message.image.url} class='lower-message__image'>
            </div>`
    };
          var html = `<div class="rightcontent__main-heading" data-message-id="${message.id}">
                  <p class="rightcontent__main-heading-name"> 
                    ${message.user_name}
                  </p>
                  <p class="rightcontent__main-heading-date">
                    ${message.created_at}
                  </p>
                </div>
                <div class="rightcontent__main-message">
                    ${message.content}
                    ${img}
                </div>`
    return html;
  }
  
  var reloadMessages = function(){
    var last_message_id = $('.rightcontent__main-heading:last').attr("data-message-id")
    if (last_message_id){
    $.ajax({
      url: './api/messages',
      type: 'get',
      datatype:'json',
      data: {id: last_message_id}
    })

    .done(function(messages){
      messages.forEach(function(message){
        var html =buildHTML(message);
       $('.rightcontent__main').append(html);
       $('.rightcontent__main').animate({
        scrollTop:$('.rightcontent__main').get(0).scrollHeight
      })
      });
    })
    
    .fail(function(){
      alert('error');
    });
  };
  }
  setInterval(reloadMessages, 5000);
});