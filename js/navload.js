// Created with help from w3 schools, where I was able to learn how to use Jquery https://www.w3schools.com/jquery/default.asp
$(document).ready(function(){
    $('.img').ready(function(){
        $('#navdiv').load('navbar.html').fadeOut(1).slideDown(1000);
        $('.centerinparent').fadeOut(1).slideDown(1000);
        $('.text').fadeOut(1).slideDown(1000);
        $('.img').fadeOut(1).slideDown(1000);
    });
});
