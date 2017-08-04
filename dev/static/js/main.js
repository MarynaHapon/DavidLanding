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

    //  benefit panel
var benefitPanel = document.getElementsByClassName("benefit-btn");
var i;

for (i = 0; i < benefitPanel.length; i++) {
    benefitPanel[i].onclick = function(){
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";

        } else {
            panel.style.display = "block";
        }
    }
}


    // Select
$('.select').each(function(){

    var $this = $(this),
        selectOption = $this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        dur = 500;

    $this.hide();

    $this.wrap('<div class="select"></div>');

    $('<div>',{
        class: 'select-gap',
        text: 'Выберите удобное для вас отделение'
    }).insertAfter($this);

    var selectGap = $this.next('.select-gap'),
        caret = selectGap.find('.caret');

    $('<ul>',{
        class: 'select-list'
    }).insertAfter(selectGap);

    var selectList = selectGap.next('.select-list');

    for(var i = 0; i < selectOptionLength; i++){
        $('<li>',{
            class: 'select-item',
            html: $('<span>',{
                text: selectOption.eq(i).text()
            })
        })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
    }

    var selectItem = selectList.find('li');

    selectList.slideUp(0);
    selectGap.on('click', function(){
        if(!$(this).hasClass('on')){
            $(this).addClass('on');
            selectList.slideDown(dur);

            selectItem.on('click', function(){
                var chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectGap.text($(this).find('span').text());

                selectList.slideUp(dur);
                selectGap.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(dur);
        }
    });

});