$(document).ready( function() {

    //product card on hower modal
    $(".product_card > img").each(function() {
        $(this).hover(
            function(){
              $(this).prev().toggleClass('hidden');
            }  
        );
    });


    //Modal window show/hide func
    function modalWindow() {

        let modal = $(".modal");

        //Show modal window with click on buttons with data-type = recall
        $("[data-type = recall]").each(function(i) {
            $(this).click(
                function() {
                    console.log(`clicked ${i}`);//delete after finish
                    modal.fadeIn("slow");
                }
            );   
        });

        //Main close modal func
        let modalClose = () => {
            modal.fadeOut("slow");
        };
        //Close modal by click on close button
        $(".modal_close").click(modalClose);

        //Close modal by click on ESC key
        $(document).on('keydown', function(e){
            if (e.code === 'Escape') {
                modalClose();
            }
        });

        
        modal.click(function(e) {
            console.log(e.target);
            if (e.target === modal) {
                modalClose(); 
            }
        });//???
    }
    modalWindow();
    


    // Recall window func
    function showRecall() {
        $(".recall").css("display", "block");
      } 
    setTimeout(showRecall, 10000);
    
    
});