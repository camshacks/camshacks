/*
	Custom CSS File.
	Mainly initializations and stuff :D
*/
  $(document).ready(function(){

    $('.scrollspy').scrollSpy();   
    $(".button-collapse").sideNav();
    $('.slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true;
    });
  });

// function checkForScroll(){
//     var startY = $('nav').height() * 2;
//     if($(window).scrollTop() >startY)
//     {
//         $('nav').addClass("scrolled");
//     }
//     else{
//         $('nav').removeClass("scrolled");
//     }
// }

// if($('nav').length>0){
//     $(window).on("scroll load resize", function(){
//         checkForScroll();
//     });
// }
