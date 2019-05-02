'use strict';


//when user selects one of the thumbnail images using moush or keyboard, 
//that image should be displayed in full-size image container at top. 
//updating img should also update its alt attribute

// $(function() { //first step: create a function. alt: function handleThumbnailClicks() ..don't foget to call it 
// 	//$ because we are using jquery method
// 	//thumbnail because we are listening for it to be clicked. 
// 	$('.thumbnail').on('click', function (event) {

// 		const imgSrc = $(this).find('img').attr('src');
// 		const imgAlt = $(this).find('img').attr('alt');

// 		$('.hero img').attr('src', imgSrc).attr('alt', imgAlt);

		
		
//   });
// });

//using .click instead of .on // .on requires use of event 'click' //both have same function

// function handleThumbnailClicks() {
// 	$('.thumbnail').click(function (event) {

// 	const imgSrc = $(this).find('img').attr('src');
// 	const imgAlt = $(this).find('img').attr('alt');

// 	$('.hero img').attr('src', imgSrc).attr('alt', imgAlt);


// 	});
// };

// handleThumbnailClicks();


// $('.thumbnail').on('click', e => {
// 	const clickedEl = $(e.target);
// 	const heroImgEl = $('.hero').find('img');
// 	const src = $(e.target).attr('src');
// 	const alt = $(e.target).attr('alt');
// 	heroImgEl.attr('src', src);
// 	heroImgEl.attr('alt', alt);
	
// });

// function fizzBuzz(num) {
// 	if (num % 15 === 0) {
// 		return 'fizzbuzz';
// 	} else if (num % 5 === 0) {
// 		return 'buzz';
// 	} else if (num % 3 === 0) {
// 		return 'fizz';
// 	} else {
// 		return num;
// 	}
// }

// function fizzBuzzer(countTo) {
// 	const results = [];

// 	for (let i = 1; i <= countTo; i++) {
// 		results.push(fizzBuzz[i]);
// 	}

// 	return results; 

// }

// function generateDiv(el) {
// 	return 
// 		<div class="fizz-buzz-items ${fizzbuzzClass}">
// 		<span>${el}</span>
// 		</div>
// }

// function generateResults(fizzbizzSeq) {
	
// 	return fizzbuzzSeq.map(fs => generateDiv(fs)); 
	
// }


// const fizzResults = fizzbuzzer 


$(function () {
	$('#number-chooser').submit(event => {
		// stop the default form submission behavior
		event.preventDefault();
		// in case there's already results
		$(".js-results").empty();
		const num = parseInt($(this).find(
			'input[name="number-choice"]').val());
		// we'll store individual DOM elements for each number
		// in this array, and once we've produced them all,
		// we'll append it to the results section of our HTML
		const results = [];
		// for each number between 1 and `num`, do the following
		for (let i = 1; i <= num; i++) {

			// if it's divisible by 3 and 5, create a fizzbuzz element
			if (i % 15 === 0) {
				results.push($(
					'<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'));
			}
			// if it's divisible by only 5, create a buzz element
			else if (i % 5 === 0) {
				results.push($(
					'<div class="fizz-buzz-item buzz"><span>buzz</span></div>'));
			}
			// if it's divisible by only 3, create a fizz element
			else if (i % 3 === 0) {
				results.push($(
					'<div class="fizz-buzz-item fizz"><span>fizz</span></div>'));
			}
			// otherwise, create a fizz-buzz-item element that just displays `num`
			else {
				results.push($(
					`<div class="fizz-buzz-item"><span>${i}</span></div>`));
			}
		}
		// attach our results to the ".js-results" element in the DOM
		$(".js-results").append(results);
	});

});

