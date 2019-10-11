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
        // console.log(event.target);

        selectorAll(".service-5-item").forEach(function(element,i){

            // selectorAll(".info-service-5").forEach(function(elem,j){
                
            // });
            // console.log(elem);
            // if(event.target)
            // console.log(event.target);
            
        });
    

        for(let i = 0;i<=selectorAll(".service-5-item").length;i++){
            console.log(selectorAll(".service-5-item")[i])
        }

        

        // console.log(element);

        // if(event.target.contains.classList("service-5-item")) {

        //     event.target.add.classList("service-5-item-active")

        // }

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