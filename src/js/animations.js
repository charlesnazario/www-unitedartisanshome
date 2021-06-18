/**
 * This animation will show the menu bar in the mobile view when the menu bar
 * icon is clicked
 */
$( document ).ready(function() {
   $( "#mobileMenuIcon" ).click(function() {
      if ( $( "#topNavigation" ).hasClass( "responsive" ) ) {
          $( "#topNavigation" ).removeClass( "responsive" );
      } else {
          $( "#topNavigation" ).addClass( "responsive" );
      }
   });
});

/**
 * This animation will provide a sliding menubar so that when the user scrolls 
 * the page the mennu bar will scroll with it and stick to the top of the page.
 */
$( document ).ready(function() {
    $( window ).scroll(function () {
        if ( $( window ).scrollTop() > $( '#logo' ).height() ) {
            $( '#topNavigation' ).addClass( 'fixed' );
        } else {
            $( '#topNavigation' ).removeClass( 'fixed' );
        }
    });
});


/**
 * This animation will handle the actions from the menubar.  When a link is 
 * clicked it will scroll to the appropriate section and offset the top by the 
 * height of the menubar.
 */
function clickScroll( event ) {
    if ( $( "#topNavigation" ).hasClass( "responsive" ) ) {
        $( "#topNavigation" ).removeClass( "responsive" );
    }
        
    var menuOffset = $( "#topNavigation" ).height();
    
    if ( !$( "#topNavigation" ).hasClass( "fixed" ) ) {
        menuOffset *= 2;
    }
          
    $( "html,body" ).animate({
        scrollTop: $( "#" + event.data.target ).offset().top - menuOffset
    }, 1000);
}

$( document ).ready(function() {
   $('#homeHref').on('click', {target: 'logo'}, clickScroll);
   $('#ourServicesHref').on('click', {target: 'ourServices'}, clickScroll);
   $('#aboutUsHref').on('click', {target: 'aboutUs'}, clickScroll);
   $('#contactUsHref').on('click', {target: 'contactUs'}, clickScroll);
   $('#logoHref').on('click', {target: 'logo'}, clickScroll);
});