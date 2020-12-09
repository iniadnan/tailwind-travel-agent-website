$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        center: true,
        loop:true,
        margin:25,
        dots: false,
        autoWidth:true,
        responsive:{
            600:{
                items: 2
            }
        }
    });
});