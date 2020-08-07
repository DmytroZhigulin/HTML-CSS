
$(document).ready( function() {
    $(".product_card > img").each(function() {
        $(this).hover(
            function(){
              $(this).prev().toggleClass('hidden');
            }  
        );
    });
});