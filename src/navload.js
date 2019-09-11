$(document).ready(function(){
    $('#navdiv').load('navbar.html').fadeOut(1).slideDown(1000);
    $('.nav').mouseenter(function(){
        $(this).css({backgroundColor: 'white'});
    }).mouseleave(function(){
        $(this).css({backgroundColor: '#333333'});
    });
});
