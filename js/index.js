// mobile menu calling code
$('.header__menu-burger').click(function(event){
	$('.header__menu-burger, .header__navigation').toggleClass('burger-active');
})
// mobile menu click code
$('.header__menu-item').click(function(event){
	const t = Array.from($('.header__menu-burger'))[0];
	if (t.classList.contains('burger-active')){
		$('.header__menu-burger, .header__navigation').removeClass('burger-active');
	}
})


// Slick-slider initializing code
$(document).ready(function(){
	$('.aut-fls-slider__inner').slick({
		slidesToShow: 1,
		infinite: false,
		adaptiveHeight:true,
		// variableWidth:true,
		dots:false,
		arrows:false,
		asNavFor:'.aut-tmb-slider__inner',
	});
  $('.aut-tmb-slider__inner').slick({
		// centerMode: true,
		slidesToShow:4,
		slidesToScroll:1,
		infinite:false,
		variableWidth:true,
		dots:true,
		asNavFor:'.aut-fls-slider__inner',
		focusOnSelect:true,
		appendDots:$('.aut-tmb-slider-navi-dots'),
		appendArrows:$('.aut-tmb-slider-navi-arrows'),
		responsive: [
			{
				breakpoint:1200,
				settings: {
					centerMode:true,
					centerPadding:'40px',
					slidesToShow:3,
					initialSlide:0,
					infinite:true,
				}
			},
		]
  });
  $('.css-slider__inner').slick({
		centerMode: true,
		slidesToShow: 1,
		infinite: false,
		variableWidth:true,
		dots:true,
		appendDots:$('.css-slider-navi-dots'),
		appendArrows:$('.css-slider-navi-arrows'),
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					infinite: true,
	  //       arrows: false,
	  //       centerMode: true,
	  //       centerPadding: '40px',
	  //       slidesToShow: 3
				}
			},
	  //   {
	  //     breakpoint: 480,
	  //     settings: {
	  //       arrows: false,
	  //       centerMode: true,
	  //       centerPadding: '40px',
	  //       slidesToShow: 1
	  //     }
	  //   }
		]
  });
  $('.rvs-slider__inner').slick({
		slidesToShow: 1,
		infinite: false,
		dots:true,
		appendDots:$('.rvs-slider-navi-dots'),
		appendArrows:$('.rvs-slider-navi-arrows'),
		adaptiveHeight:true,
	  // responsive: [
	  //   {
	  //     breakpoint: 768,
	  //     settings: {
	  //       arrows: false,
	  //       centerMode: true,
	  //       centerPadding: '40px',
	  //       slidesToShow: 3
	  //     }
	  //   },
	  //   {
	  //     breakpoint: 480,
	  //     settings: {
	  //       arrows: false,
	  //       centerMode: true,
	  //       centerPadding: '40px',
	  //       slidesToShow: 1
	  //     }
	  //   }
	  // ]
  });
});


// The author thumbnails clicking code
// let authorThumbnails = document.querySelector('.main__aut-thumbnails');
// let authorFiles = document.querySelectorAll('.main__aut-file');

// if(authorThumbnails){
// 	authorThumbnails.onclick=function(event){
// 		event.preventDefault();
// 		let authorTarget = event.target.closest('.main__aut-thumbnail');
// 		if(!authorTarget){
// 			return;
// 		}
// 		for (let author of Array.from(authorFiles)){
// 			if(!author.classList.contains('js-hidden')){
// 				author.classList.add('js-hidden');
// 			};
// 		};
// 		let id = "author-" + authorTarget.id.slice(10);
// 		let visibleAuthor=document.getElementById(id);
// 		if(visibleAuthor){
// 			visibleAuthor.classList.remove('js-hidden');
// 		};
// 	};
// };

//Cases slider posing code
let casesHeader= document.querySelector('.main__css-header');
let casesSlider= document.querySelector('.main__css-slider');
let casesSliderNavigation= document.querySelector('.css-slider-navigation');

window.addEventListener(`resize`, event => {
	casesSliderOffsetRecalc();
}, false);
casesSliderOffsetRecalc();
function casesSliderOffsetRecalc(){
	if(casesHeader&&casesSlider){
		if(casesHeader.offsetLeft>=1){
			let casesSliderOffset=(casesHeader.offsetLeft+15)*.2+167.8
			casesSlider.style.left="-"+ casesSliderOffset +"px";
		}
		else{
			casesSlider.style.left="0px";
		}
		console.log(window.innerWidth+" - "+casesHeader.offsetLeft);
	}
}

/*debugging code*/
const aSections = Array.from(document.querySelectorAll('section'));
console.log(aSections);
aSections.forEach(function(item,index, array){
	console.log(item.className+" - "+item.offsetTop);
})
console.log(window);
console.log(window.innerWidth);