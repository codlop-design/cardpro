(function ($) {
    "use strict";
	
	var $window = $(window); 
	
	/* Preloader Effect */
	$window.on('load', function(){
		$(".preloader").fadeOut(600);
	});
	
	/* Animate with wow js */
    new WOW({mobile:false}).init(); 

    var countElement = $(".count-box p");
    var targetCount = parseInt(countElement.parent().attr("count"));
    var currentCount = 0;
    var totalTime = 3000;
    var interval = totalTime / targetCount;

    var counter = setInterval(function() {
      currentCount++;
      var countString = currentCount.toString();

      // فارغة العنصر الحالي
      countElement.empty();

      // عرض كل رقم في span منفصل
      for (var i = 0; i < countString.length; i++) {
        $("<span>").text(countString[i]).appendTo(countElement);
      }

      if (currentCount === targetCount) {
        clearInterval(counter);
      }
    }, interval);


    const myCountdown = new countdown({
      target: '.countdown-div',
      dayWord: ' يوم',
      hourWord: ' ساعة',
      minWord: ' دقيقة',
      secWord: ' ثانية'
  });

  var swiper = new Swiper('.testimonial-slider', {
		grabCursor: true,
		autoplay: true,
		centeredSlides: true,
		slidesPerView: 1,
		pagination: {
			el: '.testimonial-pagination',
			type: 'bullets',
			clickable: true
		},
	});
	
})(jQuery);

