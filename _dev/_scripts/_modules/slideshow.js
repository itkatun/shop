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