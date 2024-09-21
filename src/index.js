$(document).ready(function(){

    function slickRender(){
        return new Promise (function (resolve, reject) {
            $.ajax({
                type: "GET",
                url: "https://api.thecatapi.com/v1/images/search?limit=5",
                success: function (response) {
                    $.each(response, function(index, item) {
                        var key = index + 1;
                        var cat_img = $('<img>');
        
                        cat_img.attr('src', item.url );
                        cat_img.attr('width', item.width);
                        cat_img.attr('height', item.height);
                        
                        console.log(`#cat-${key}`)
                        $(`#cat-${key}`).append(cat_img)
                        
                        $('.cats').slick({
                            lazyLoad: 'ondemand',
                            slidesToScroll: 1,
                            dots: true,
                            infinite: true,
                            slidesToShow: 3,
                            adaptiveHeight: true
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
                    })
                    
                }
            });   
        })
    }

    slickRender().then( () => {
        console.log('ok')
    }).catch(()=> {
        console.log('erro na request')
    });

});


