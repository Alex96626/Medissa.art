document.addEventListener('DOMContentLoaded', () => {

// $('.budget-list').slick({
//     infinite: false,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     centerMode : true,
//     initialSlide : 1,
//     arrows :true,
//     variableWidth : true,
//     prevArrow: $('.switch-back'),
//     nextArrow: $('.switch-forward'),
//     responsive: [
//     {
//         breakpoint: 1921,
//         settings: 'unslick'
//     },

//     {
//         breakpoint: 1201,
//         settings: 'slick'
        
//     },
// ]
// });

    $( ".show-service-price" ).click(function(){ 
      $( "read" ).slideToggle("slow",function()
      {
        alert("Slide Toggle Method completed.");
      });
    });
  

});