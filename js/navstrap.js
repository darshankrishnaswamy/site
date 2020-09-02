$("[data-trigger]").on("click", function(){
    var trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    // console.log(trigger_id);
    $('body').toggleClass("offcanvas-active");
});

// close button
$(".btn-close").click(function(){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
});

$(".nav .nav-link").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
});