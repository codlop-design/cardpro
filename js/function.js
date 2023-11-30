(function ($) {
  "use strict";
  /* Preloader */
  $(window).on("load", function () {
    $(".preloader").fadeOut(600);
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
  var buttons = $(".qty-btn-plus, .qty-btn-minus");
  buttons.click(function () {
    var $inputQty = $(this).parent(".p-quentity").find(".input-qty");
    var amount = Number($inputQty.val());

    if ($(this).hasClass("qty-btn-plus")) {
      $inputQty.val(amount + 1);
    } else if (amount > 1) {
      $inputQty.val(amount - 1);
    }
  });

  // toggle password
  $(".toggle-password").click(function () {
    var passwordInput = $(this).parent().find("input");
    var currentType = passwordInput.attr("type");
    passwordInput.attr(
      "type",
      currentType === "password" ? "text" : "password"
    );
    $(this).toggleClass("bi-eye-slash bi-eye");
  });

  // checkout
  $(document).on("click", ".list-steps .form-step .btn-booknow", function () {
    $(".list-steps .form-step").hide();
    $(".list-steps .choose-payment").show();
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
