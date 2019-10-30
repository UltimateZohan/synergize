
$('.custom-nav').hover(function(){
  $('.custom-nav').find('a').slideToggle()
});
$('.fa-eye').click(function(){
  $(this).siblings('.password-field').attr('type', function (index, attr){
      return attr == 'password' ? 'text' : 'password';    
  });
  $(this).toggleClass('fa-eye-slash');
});
$('#myCarousel').carousel({
  interval: false
});
$('#myCarousel1').carousel({
  interval: false
});
$('.member-image').hover(function(){
  $(this).find('.overlay').fadeToggle();
});
$('.fab').click(function(){
  $(this).toggleClass('rotate');
  $(this).find('.glyphicon').toggleClass('glyphicon-minus');
  $(this).find('.glyphicon').toggleClass('glyphicon-plus'); 
  $('.showup').slideToggle();
});
$('.normal-drive').click(function(){
  $('.s3-form').hide();
  $('.all-form').toggle();
});
$('.s3-drive').click(function(){
  $('.all-form').hide();
  $('.s3-form').toggle();
});
$('.signup-pwd').focus(function(){
  $('.strength-check').slideDown();
});
$('.signup-pwd').blur(function(){
  $('.strength-check').slideUp();
});
$('.signup-pwd').on('input', function(){
  var alpha = /[(a-z)]/;
  var num = /[(0-9)]/;
  var caps = new RegExp('[A-Z]');  
  var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
  var lengthcheck = $('.lengthcheck');
  var alphanumcheck = $('.alphanumcheck');
  var capscheck = $('.capscheck');
  var specialcheck = $('.specialcheck');
  var userpass = $(this).val();
  
  // LENGTH CHECK
  if(userpass.length > 8){
    lengthcheck.removeClass('fa-times');
    lengthcheck.addClass('fa-check');
  }else{
    lengthcheck.removeClass('fa-check');
    lengthcheck.addClass('fa-times');
  }

  // ALPHA MUNERIC CHECK
  if(userpass.match(alpha) && userpass.match(num) ){
    alphanumcheck.removeClass('fa-times');
    alphanumcheck.addClass('fa-check');
  }else{
    alphanumcheck.removeClass('fa-check');
    alphanumcheck.addClass('fa-times');
  }

  // SPECIAL CHARACTER CHECK
  if(userpass.match(special_characters)){
    specialcheck.removeClass('fa-times');
    specialcheck.addClass('fa-check');
  }else{
    specialcheck.removeClass('fa-check');
    specialcheck.addClass('fa-times');
  }

  // CAPS CHECK
  if(userpass.match(caps)){
    capscheck.removeClass('fa-times');
    capscheck.addClass('fa-check');
  }else{
    capscheck.removeClass('fa-check');
    capscheck.addClass('fa-times');
  }

});

// SIGN UP NAME EMAIL VAL CHECK
$('.signup-val-check').blur(function(){
  if(!$(this).val()){
    $(this).siblings('.text-red').fadeIn();
  }else{
    $(this).siblings('.text-red').fadeOut();
  }
});

// SHARE LINK DROP
$('.text-link').click(function(){
  $('.drop-link').slideToggle();
});
