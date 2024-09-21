$(document).ready(function(){
    $('.cats').slick({
        lazyLoad: 'ondemand',
        slidesToScroll: 1,
        // dots: true,
        // infinite: true,
        slidesToShow: 3,
        // slidesToScroll: 3
    });

    $('.cats').on('swipe', function(event, slick, direction){
        console.log(direction);
    });


});


