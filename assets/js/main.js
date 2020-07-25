$(document).ready(function(){
	$('.header-nav__btn').click(function(){
		$(this).toggleClass('header-nav__btn--active');
		$('.header-nav__menu').toggleClass('active');
	});
});