$(document).ready(function(){
    $('#navdiv').load('navbar.html').ready(function(){
        $('#navdiv').fadeOut(1).slideDown(1000);
    })
    $('body').setAttribute('background-color', "lightskyblue");

});