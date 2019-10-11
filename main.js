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

    // selector(".service-5-list").addEventListener("click",(event)=>{
    //     if(!event.target.closest('.service-item-picture')) return;
            
        selector(".service-5-list").addEventListener("click",(event)=> { 
            const elem = event.target; 
            
            if(!elem.closest('.service-item-picture')) return; 
            
            selectorAll(".service-5-item").forEach(function(element) { 
            element.querySelector('.stage').classList.remove('stage-active'); 
            element.querySelector('.service-item-picture').classList.remove('service-item-picture-active'); 
            }); 
            
            selectorAll(".info-service-5").forEach(function(element) { 
            element.classList.remove('info-service-5-active'); 
            }); 
            console.log(elem.closest('.service-item-picture').previousElementSibling);
            
            elem.closest('.service-item-picture').previousElementSibling.classList.add('stage-active'); 
            elem.closest('.service-item-picture').classList.add('service-item-picture-active'); 
            
            console.log(elem.closest('.service-5-item'));   
            selector('.wrapper-info-service-5 .info-service-5:nth-child( ' + elem.closest('.service-5-item').id + ')').classList.add('info-service-5-active');

        });

        // selectorAll(".service-5-item").forEach(function(element,i){
        //     element.children[1].classList.remove("service-item-picture-active")

        //     if(event.target.closest("service-item-picture").classList.contains("service-item-picture")){
        //         event.target.classList.add("service-item-picture-active");
        //     }
        //     if(event.target.parentNode.classList.contains("service-item-picture")){
        //         event.target.parentNode.classList.add("service-item-picture-active");
        //     }
        //     selectorAll(".info-service-5").forEach(function(elem_text){
        //         elem_text.classList.remove("info-service-5-active");
        //     });
        //     console.log(event.target);
        //     console.log(element);
        //     if(event.target === element) {
        //         console.log('hello');
        //     }

        // });

        

    // });
    

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