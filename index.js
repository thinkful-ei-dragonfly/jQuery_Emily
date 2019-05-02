'use strict';


//when user selects one of the thumbnail images using moush or keyboard, 
//that image should be displayed in full-size image container at top. 
//updating img should also update its alt attribute

$(function() {
  $('.thumbnail').on('click', function (event) {

		const imgSrc = $(this).find('img').attr('src');
		const imgAlt = $(this).find('img').attr('alt');

		$('.hero img').attr('src', imgSrc).attr('alt', imgAlt);

		
		
  });
});