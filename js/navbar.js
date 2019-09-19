// Created with help from w3 schools, where I was able to learn how to use Jquery https://www.w3schools.com/jquery/default.asp
$(document).ready(function(){
    $('.nav').mouseenter(function(){
        $(this).css({backgroundColor: "#000000"});
    }).mouseleave(function(){
        $(this).css({backgroundColor: "#222222"});
    });
});