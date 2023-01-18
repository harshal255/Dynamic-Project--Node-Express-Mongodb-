$(window).on('scroll', () => {
    if ($(window).scrollTop()) {
        $('nav').addClass('white');
        $('nav').removeClass('bg-light')
       
    }
    else {
        $('nav').removeClass('white');
    }
})