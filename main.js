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
    // console.log( document.querySelector(".show-service-price"));

    let selector = selector => document.querySelector(selector);
    let selectorAll = selector => document.querySelectorAll(selector);

    
    
    selector(".service-price-list").addEventListener("click",(event)=> {
        console.log(selector(".service-price-list"));
        console.log(event.target);
        if(event.target.classList.contains('show-service-price-active')) {
            event.target.classList.remove('show-service-price-active')
            console.log($(event.target).parent().children(".active-service-price-list"));
            $(event.target).parent().children(".active-service-price-list").slideToggle("slow");
            // $(event.target).parent()[0].
            // $( ".show-service-price-active" ).siblings(".active-service-price-list").slideToggle("slow");
            return;
        }
        if(event.target.classList.contains('show-service-price')) {
                event.target.classList.add('show-service-price-active')
                // $( ".active-service-price-list" ).siblings().slideToggle("slow");
                // $( ".show-service-price-active" ).siblings(".active-service-price-list").slideToggle("slow");
                // return  ;
                $(event.target).parent().children(".active-service-price-list").slideToggle("slow");
        }
        
    // }
    });
            // $( ".show-service-price" ).click(function(){ 

            //     $( ".active-service-price-list" ).slideToggle("slow");
            //   });


   
    
  

});