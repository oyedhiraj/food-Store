$(document).ready(function(){
    $('.food-slider').slick({
       autoplay:true,
      slidesToShow:3,
      slidesToScroll:1,
      prevArrow:".prev-btn",
      nextArrow:".next-btn",
      responsive:[
         {
            breakpoint:992,
            settings:{
             slidesToShow:2,
            }
         },
         {
          breakpoint:768,
          settings:{
           slidesToShow:1,
          }
       }
      ]
 
    });

  

 
    $('.nav-trigger').click(function(){
       $('.site-content-wrapper').toggleClass('scaled');
    })
 });

 const loader = document.querySelector('.loader');
 const main = document.querySelector('.main');
 
 function init() {
   setTimeout(() => {
     loader.style.opacity = 0;
     loader.style.display = 'none';
 
     main.style.display = 'block';
     setTimeout(() => (main.style.opacity = 1), 50);
   }, 4000);
 }
 
 init();
 
 