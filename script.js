ScrollReveal({ reset: true });
ScrollReveal().reveal('.About', { duration: 2000 });
ScrollReveal().reveal('.Education', { duration: 2000 });
ScrollReveal().reveal('.Skills', { duration: 2000 });
ScrollReveal().reveal('.container', { duration: 4000 });
ScrollReveal().reveal('.Projects', { duration: 2000 });
ScrollReveal().reveal('.Connect', { duration: 2000 });
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
    $('#header-section').fadeIn("slow");
});
