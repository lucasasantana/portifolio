
$(function(){

    var stickyHeaderTop = $('#bottomBar').offset().top;

    $(window).scroll(function(){

            if($(window).scrollTop() + 1 > stickyHeaderTop ) {
                    $('#bottomBar').css({position: 'fixed', top: '0px'});
                    
            } else {
                    $('#bottomBar').css({position: '', top: ' '});     
            }
    });
});