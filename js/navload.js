// Created with help from w3 schools, where I was able to learn how to use Jquery https://www.w3schools.com/jquery/default.asp
$(document).ready(function(){
    $('.img').ready(function(){
        $('#navdiv').load('navbar.html').fadeOut(1).fadeIn(1);
        $('.centerinparent').fadeOut(1).fadeIn(1);
        $('.text').fadeOut(1).fadeIn(1);
        $('.img').fadeOut(1).fadeIn(1);
    });
});
