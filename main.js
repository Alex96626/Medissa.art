document.addEventListener('DOMContentLoaded', () => {

    let selector = selector => document.querySelector(selector);
    let selectorAll = selector => document.querySelectorAll(selector);
    selector(".service-price-list").addEventListener("click",(event)=> {
        console.log(selector(".service-price-list"));
        console.log(event.target);
        if(event.target.classList.contains('show-service-price-active')) {
            event.target.classList.remove('show-service-price-active')
            console.log($(event.target).parent().children(".active-service-price-list"));
            $(event.target).parent().children(".active-service-price-list").slideToggle("slow");
            return;
        }
        if(event.target.classList.contains('show-service-price')) {
                event.target.classList.add('show-service-price-active')
                $(event.target).parent().children(".active-service-price-list").slideToggle("slow");
        }
    });
    

    // slider

    

$('.reviews-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    arrows :true,
    responsive: [
        {
            breakpoint: 1101,
            settings: {
                variableWidth: false,
            }
        },
    ]
});

$('.examples-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    swipe:false,
    arrows :true,
    responsive: [
        {
            breakpoint: 1101,
            settings: {
                
            }
        },
    ]
});

// slider!

$(function(){
    $(".examples-slider .slick-slide").twentytwenty({
        no_overlay: true,
    });
  });

});