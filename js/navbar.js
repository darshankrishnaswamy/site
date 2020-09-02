// Created with help from w3 schools, where I was able to learn how to use Jquery https://www.w3schools.com/jquery/default.asp
$(document).ready(function(){
    $('.nav').mouseenter(function(){
        $(this).css({backgroundColor: "#000000"});
    }).mouseleave(function(){
        $(this).css({backgroundColor: "#222222"});
    });
    var a_elements = document.getElementsByTagName("a");
    console.log(a_elements);
    console.log("E")
    console.log(window.location.pathname.split("/")[2])
    console.log(a_elements.length)
    for (var i = 0, len = a_elements.length; i < len; i++){
        console.log("IT IS")
        console.log(a_elements[i])
        console.log(a_elements[i].getAttribute("href"));
        console.log( window.location.pathname.split("/")[2])
        if(a_elements[i].getAttribute("href") === window.location.pathname.split("/")[2]) a_elements[i].classList.add("active")
    }
});