/* --------- plugins initialisations --------- */

$(document).ready(function(){

	if ($('.product__slider-list').length) {
		$('.product__slider-list').bxSlider({
			slideWidth: 75,
			minSlides: 3,
			maxSlides: 3,
			slideMargin: 10,
			pager: false,
			nextText: '>',
			prevText: '<'

		});
	}

	if ($('.about__text').length) {
		$('.about__text').columnize({
			width: 515,
			columns: 2
		});
	}

	/* --------- table coloring --------- */

	$('.product__text-table tr:odd').addClass('colored');

	$('.header__basket-item:odd').addClass('colored');
	
	/* --------- to top --------- */
	
	$('.up-button').on('click', function(e){
		e.preventDefault();

		$('body, html').animate({scrollTop: 0}, 300);
	});

}); // - > ready_end;
/* --------- slideshow --------- */

(function(){

	$('.product__slider-link').on('click', function(e){
	    e.preventDefault();

		var
			$this = $(this),
			container = $this.closest('.product__slideshow'),
			path = $this.find('img').attr('src'),
			item = $this.closest('li');

		if (!item.hasClass('active')) {

			item.addClass('active').siblings().removeClass('active');

			container.find('.product__slideshow-display img').fadeOut(function(){
				$(this).attr('src', path).fadeIn();
			});
		}
	});
}());