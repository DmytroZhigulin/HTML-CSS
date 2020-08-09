$(document).ready( function() {

    $(".product_card > img").each(function() {
        $(this).hover(
            function(){
              $(this).prev().toggleClass('hidden');
            }  
        );
    });

    $("[data-type = recall]").each(function(i) {
        $(this).click(
            function() {
                console.log(`clicked ${i}`);
                $(".modal").css("display", "block");
            }
        );
        
    });



    function showRecall() {
        $(".recall").css("display", "block");
      } 
    setTimeout(showRecall, 10000);
    
    
});