$(document).ready(function() {
  playRyu();
  $('.ryu').hide();

  $( ".logo" ).animate({ opacity: 1, left: "450", height: "toggle" },  2000, function() {   
    $('.logo').fadeOut(4000).finish();
    $('.ryu').show();
    $('.intro').fadeIn(4000);

  });

 

 $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  }).mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  }).mousedown(function() {
    playHadouken(); 
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate({'left': '300px'},500,function() {
      $(this).hide();
      $(this).css('left', '-212px');
    });
  }).mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });

  $('body').keydown(function(e){
    if (event.which == 88) {
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
        // $('.ryu-still').hide();
      $('.ryu-cool').show();
    }
  }).keyup(function(e){
    if (event.which == 88){
      $('.ryu-cool').hide();
      $('.ryu-ready').show();

      // $('.ryu-still').show();
    }
  });

});

function playRyu () {
  $('#ryu')[0].volume = 0.5;
  $('#ryu')[0].load();
  $('#ryu')[0].play();
}

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}