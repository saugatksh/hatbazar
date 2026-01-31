(function ($) {
  "use strict";

  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });
  if (document.getElementById('default-select')) {
    $('select').niceSelect();
  }

  // Back to Top Button
   $(document).ready(function () {
      var btn = $('#backToTop');

      $(window).scroll(function () {
         if ($(window).scrollTop() > 300) {
            btn.fadeIn();
         } else {
            btn.fadeOut();
         }
      });

      btn.click(function () {
         $('html, body').animate({ scrollTop: 0 }, 600);
         return false;
      });
   });

  // Page Loader
  window.addEventListener("load", function () {
    const loader = document.getElementById("page-loader");
    if (!loader) return;

    loader.style.transition = "opacity 0.6s ease";
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 600);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    document.querySelectorAll(".fade-up-section").forEach(section => {
      observer.observe(section);
    });
  });

  // page-scroll
  $('.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    var headerH = '80';
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  //counter up
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });

  //masonry js
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
  //gallery js
  // $('.gallery').each(function () {
  //   $(this).magnificPopup({
  //     delegate: 'a',
  //     type: 'image',
  //     gallery: {
  //       enabled: true
  //     }
  //   });
  // });

  if ($('.img-gal').length > 0) {
    $('.img-gal').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    infinite: true,
    asNavFor: '.slider-nav-thumbnails',
    autoplay: true,
    autoplaySpeed: 3000,
    touchThreshold: 1000,
    pauseOnFocus: true,
    dots: false,
  });

  $('.slider-nav-thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    centerMode: true,
    autoplaySpeed: 3000,
    touchThreshold: 1000,
    speed: 500,

    // responsive: [
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       centerMode: false,
    //     }
    //   }
    // ]
  });

  //UPDATED 

  if (document.getElementById('default-select, .nice-select')) {
    $('select').niceSelect();
  }
  $(document).ready(function () {
    $('select').niceSelect();
  });
  //------- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();

}(jQuery));