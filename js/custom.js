$(function()
  {
    //animate on scroll
    new WOW().init();
    
});



$(function()
  {
    
    $(window).scroll(function()
    {
       if($(this).scrollTop() < 200)
          {
            $("nav").removeClass("scroll-top-nav");
            $("ul").removeClass("border-scroll");

          } 
          else
          {
            $("nav").addClass("scroll-top-nav");
            $("ul").addClass("border-scroll");

          }
    });
});



$('.scrollLink').click( function() {
     $('html, body').animate({
          scrollTop: $('#accmp').offset().top
     }, 1100);
});

