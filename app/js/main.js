
$(function(){

   var mixer = mixitup('.products__inner-box');



   $(".rate-star").rateYo({
      rating: 5,
       readOnly: true,
        starWidth: "12px"
    });

   $('.product-slider__inner').slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2
   });

});


