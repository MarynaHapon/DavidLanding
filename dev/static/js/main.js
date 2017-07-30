$('.toggle').click(function() {
    $('.toggle').toggleClass('active');
    $('#overlay').toggleClass('open');
    $('#overlay-hidden').toggleClass('hidden-wrap'); // .hidden-wrap --> common_styles.styl
});


// external js: flickity.pkgd.js
var $carousel = $('.carousel').flickity({
    autoPlay: 3000,
    imagesLoaded: true,
    percentPosition: false,
    setGallerySize: false
});

var $imgs = $carousel.find('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';
// get Flickity instance
var flkty = $carousel.data('flickity');

$carousel.on( 'scroll.flickity', function() {
    flkty.slides.forEach( function( slide, i ) {
        var img = $imgs[i];
        var x = ( slide.target + flkty.x );
        img.style[ transformProp ] = 'translateX(' + x  + 'px)';
    });
});
