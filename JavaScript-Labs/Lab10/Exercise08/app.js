/* Exercise 10.8 - Complex Animations */
$(function() {
    $('button').click(function() {
        $('#box').stop(true,true).css({left:'38px',top:'95px',height:'150px',opacity:'0.4'})
            .animate({left:'495px',opacity:'1',height:'50px'})
            .animate({top:'400px',opacity:'0.2'})
            .animate({height:'200px'},2000);
    });
});
