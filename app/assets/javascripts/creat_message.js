$(document).on("turbolinks:load", function(){
  function buildHTML(message){

    var img ='';
    if (message.image.url){
      img = `<div class="rightcontent__main-message--image" >
            <img src=${message.image.url} class='lower-message__image'>
            </div>`
    };
          var html = `<div class="rightcontent__main-heading" data-message-id="${message.id}">
                  <p class="rightcontent__main-heading-name"> 
                    ${message.name}
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
  
  
  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url=$(this).attr('action')
    
    $.ajax({
      url: url,
      type: "post",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html =buildHTML(data);
      $('.rightcontent__main').append(html);
      
      $('.rightcontent__main').animate({
        scrollTop:$('.rightcontent__main').get(0).scrollHeight});
        $('.rightcontent--form--submit').attr('disabled', false);
        $('.rightcontent--form--wrapper-input').val('')
    })
    .fail(function(){
        alert('error');
    })
  })
});