$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('#overlay-hidden').toggleClass('hidden-wrap') // .hidden-wrap --> common_styles.styl
});