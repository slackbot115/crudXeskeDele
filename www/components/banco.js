$(document).on('click','#cadastro',function(){
  var parametros = {
    "nome": $("#nome").val(),
    "email": $("#email").val()
  }

  $.ajax({
    type:"post",
    url:"https://mobile-slackbot115.c9users.io/connection.php",
    data:parametros,
    success:function(data){
      $("#nome").val("");
      $("#email").val("");
      navigator.notification.alert(data);
    },
    error:function(data){
      navigator.notification.alert(data);
    }
  });
});

