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
          } 
          else
          {
            $("nav").addClass("scroll-top-nav");
          }
        
    });
});


