document.addEventListener('DOMContentLoaded', () => {

    let selector = selector => document.querySelector(selector);
    let selectorAll = selector => document.querySelectorAll(selector);
    // if(selector(".show-service-price").classList.contains("show-service-price-active")){
    //     selector(".active-service-price-list").add("active-service-price-list-active")
    // }

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

    selector(".service-5-list").addEventListener("click",(event)=>{

        selectorAll(".service-5-item").forEach(function(element,i){
            element.children[1].classList.remove("service-item-picture-active")
            if(event.target.classList.contains("service-item-picture")){
                event.target.classList.add("service-item-picture-active");
            }
            if(event.target.parentNode.classList.contains("service-item-picture")){
                event.target.parentNode.classList.add("service-item-picture-active");
            }
            // console.log(selectorAll(".info-service-5"));
            
            // selectorAll(".info-service-5").classList.remove("info-service-5-active");
            selectorAll(".info-service-5").forEach(function(elem_text){
            //     console.log(element.children);
            //     console.log(elem_text);
                elem_text.classList.remove("info-service-5-active");
            //     return elem_text;
            // // console.log(i);
            });
            console.log(event.target);
            console.log(element);
            if(event.target === element) {
                console.log('hello');
            }

        });

        

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
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
                // centerMode:true,
                // initialSlide:1,
                
                
            }
        },

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                centerMode:true,
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
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
                
            }
        },

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                
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