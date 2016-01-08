$(document).foundation();
$('.orbit-indicator li').on( 'click', function(e){
	$('li.active').removeClass('active');
	$(this).addClass('active');
	var slide = $(this).attr('data-id');
	$('.orbit-slide'+slide+'').addClass('is-active');

		$('.orbit-next').click(); //its a little bit of a hack
	});

$('.menu .button').on( 'click', function(e){
	$('.button.active').removeClass('active');
	$(this).addClass('active');
});

$('#category-holder a').on( 'click', function(e){
	$('#category-holder a').removeClass('active');
	$(this).addClass('active');
});