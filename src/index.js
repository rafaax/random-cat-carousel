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
        console.log('Swipe direction: ' + direction);
    });

    $('.cats').on('click', '.slick-prev', function() {
        console.log('Arrow previous clicked!');
    });
    
    // Captura o clique na seta "próxima"
    $('.cats').on('click', '.slick-next', function() {
        console.log('Arrow next clicked!');
    });


});


