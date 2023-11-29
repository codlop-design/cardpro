(function ($) {
  "use strict";
  /* Preloader */
  $(window).on("load", function () {
    $(".preloader").fadeOut(600);
  });

  $(document).on("click", ".list-steps .form-step .btn-booknow", function () {
    $(".list-steps .form-step").hide();
    $(".list-steps .choose-payment").show();
  });

  /* Animate with wow js */
  new WOW({ mobile: false }).init();

  // Swiper
  var swiper = new Swiper(".testimonial-slider", {
    grabCursor: true,
    autoplay: true,
    centeredSlides: true,
    slidesPerView: 1,
    pagination: {
      el: ".testimonial-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  // thumbs-img
  var galleryThumbs = new Swiper(".thumbs-img", {
    spaceBetween: 10,
    slidesPerView: 3,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
  });

  // view-img
  var galleryMain = new Swiper(".view-img", {
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  galleryMain.on("slideChangeTransitionStart", function () {
    galleryThumbs.slideTo(galleryMain.activeIndex);
  });

  galleryThumbs.on("transitionStart", function () {
    galleryMain.slideTo(galleryThumbs.activeIndex);
  });

  // quentity
  var buttonPlus = $(".qty-btn-plus");
  var buttonMinus = $(".qty-btn-minus");
  var incrementPlus = buttonPlus.click(function () {
    var $n = $(this).parent(".p-quentity").find(".input-qty");
    $n.val(Number($n.val()) + 1);
  });

  var incrementMinus = buttonMinus.click(function () {
    var $n = $(this).parent(".p-quentity").find(".input-qty");
    var amount = Number($n.val());
    if (amount > 1) {
      $n.val(amount - 1);
    }
  });

  $(".toggle-password").click(function () {
      var passwordInput = $(this).parent().find("input");
      var currentType = passwordInput.attr("type");
      passwordInput.attr("type", currentType === "password" ? "text" : "password");
      $(this).toggleClass("bi-eye-slash bi-eye");
  });

  // Count Up
  var countElement = $(".count-box p");
  var targetCount = parseInt(countElement.parent().attr("count"));
  var currentCount = 0;
  var totalTime = 3000;
  var interval = totalTime / targetCount;
  var counter = setInterval(function () {
    currentCount++;
    var countString = currentCount.toString();
    countElement.empty();
    for (var i = 0; i < countString.length; i++) {
      $("<span>").text(countString[i]).appendTo(countElement);
    }
    if (currentCount === targetCount) {
      clearInterval(counter);
    }
  }, interval);

  // CountDown
  const myCountdown = new countdown({
    target: ".countdown-div",
    dayWord: " يوم",
    hourWord: " ساعة",
    minWord: " دقيقة",
    secWord: " ثانية",
  });
})(jQuery);
