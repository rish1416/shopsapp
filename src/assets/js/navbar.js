$(document).ready(function(){
  $(window).scroll(function () {
if ($(this).scrollTop() > 200) {
  $('.back-to-top').fadeIn('slow',2000);
  $('#nav').addClass('bg-dark');
  $
} else {
  $('.back-to-top').fadeOut('slow',2000);
  $('#nav').removeClass('bg-dark');
}
});

$( '#nav .navbar-nav a' ).on( 'click', function () {
	$( '#nav .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});
});
