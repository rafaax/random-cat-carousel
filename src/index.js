$(document).ready(function(){

   

    function slickRender(){
        return new Promise (function (resolve, reject) {
            $.ajax({
                type: "GET",
                url: "https://api.thecatapi.com/v1/images/search?size=small&mime_types=gif&limit=10",
                success: function (response) {
                    $.each(response, function(index, item) {
                        var key = index + 1;
                        var cat_img = $('<img>');
        
                        cat_img.attr('src', item.url );
                        cat_img.attr('width', item.width);
                        cat_img.attr('height', item.height);
                        
                        // console.log(`#cat-${key}`)
                        $(`#cat-${key}`).append(cat_img)
                        
                        
                    })
                    
                    $('.cats').slick({
                        slidesToScroll: 1,
                        dots: true,
                        slidesToShow: 3,
                    });

                    $('.cats').on('swipe', function(event, slick, direction){
                        console.log('Swipe direction: ' + direction);
                    });
                    
                    $('.cats').on('click', '.slick-prev', function() {
                        console.log('Arrow previous clicked!');
                    });
                    
                    $('.cats').on('click', '.slick-next', function() {
                        console.log('Arrow next clicked!');
                    });
                    resolve()
                },
                error: function(){
                    reject();
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


