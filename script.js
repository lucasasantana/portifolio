
$(function(){
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = $('#bottomBar').offset().top;

    $(window).scroll(function(){
            if( $(window).scrollTop() + 5 > stickyHeaderTop ) {
                    $('#bottomBar').css({position: 'fixed', top: '0px'});
                    
            } else {
                    $('#bottomBar').css({position: 'static', top: '0px'});
                    
            }
    });
});