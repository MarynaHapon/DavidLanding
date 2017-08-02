    // menu
$('.toggle').click(function() {
    $('.toggle').toggleClass('active');
    $('#overlay').toggleClass('open');
    $('#overlay-hidden').toggleClass('hidden-wrap'); // .hidden-wrap --> common_styles.styl
});

    // carousel
var $carousel = $('.carousel').flickity({
    autoPlay: 3000,
    imagesLoaded: true,
    percentPosition: false,
    setGallerySize: false
});

var $imgs = $carousel.find('.carousel-cell img');
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';
var flkty = $carousel.data('flickity');

$carousel.on( 'scroll.flickity', function() {
    flkty.slides.forEach( function( slide, i ) {
        var img = $imgs[i];
        var x = ( slide.target + flkty.x )* -1/3;
        img.style[ transformProp ] = 'translateX(' + x  + 'px)';
    });
});

    // animations for modules
AOS.init({
    easing: 'ease-in-out-sine'
});

    // progressbar
var progressBar1 = new ProgressBar.Circle(infoProgressBar1, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#4cb027',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null,
});
progressBar1.animate(0.3125);

var progressBar2 = new ProgressBar.Circle(infoProgressBar2, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#4cb027',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});
progressBar2.animate(0.0625);

var progressBar3 = new ProgressBar.Circle(infoProgressBar3, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#4cb027',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});
progressBar3.animate(0.0625);

var progressBar4 = new ProgressBar.Circle(infoProgressBar4, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#4cb027',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});
progressBar4.animate(0.125);

var progressBar5= new ProgressBar.Circle(infoProgressBar5, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#4cb027',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});
progressBar5.animate(0.0625);