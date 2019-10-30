$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Mobile Menu 
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass('active');
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Sticky
    
    $(window).on('scroll',function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation-bar").removeClass("sticky");
        }else{
            $(".navigation-bar").addClass("sticky");
        }
    });
    
    
    //===== Section Menu Active
    
    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 90;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });
    
    
    //===== wow
    
    new WOW().init();
    
    
    //===== AOS
    
     AOS.init({
         duration: 800,
     });
    
    
    //===== Slick project
    
    $('.project-active').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
    
    
    //===== Slick Testimonial
    
    $('.testimonial-active').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    $(document).ready(function () {

      var $slides = $('.con__slide').length,
      topAnimSpd = 650,
      textAnimSpd = 1000,
      nextSlideSpd = topAnimSpd + textAnimSpd,
      animating = true,
      animTime = 4000,
      curSlide = 1,
      nextSlide,scrolledUp;
    
      setTimeout(function () {
        animating = false;
      }, 2300);
    
      function navigateUp() {
        if (curSlide > 1) {
          scrolledUp = true;
          pagination(curSlide);
          curSlide--;
        }
      }
    
      function navigateDown() {
        if (curSlide < $slides) {
          scrolledUp = false;
          pagination(curSlide);
          curSlide++;
          console.log(curSlide);
        }
      }
    
      $(window).on('load', function () {
        $('.con__slide--1').addClass('active');
      });
    
      function pagination(slide, target) {
        animating = true;
        // Check if pagination was triggered by scroll/keys/arrows or direct click. If scroll/keys/arrows then check if scrolling was up or down.
        if (target === undefined) {
          nextSlide = scrolledUp ? slide - 1 : slide + 1;
        } else {
          nextSlide = target;
        }
        ////////// Slides //////////
        $('.con__slide--' + slide).removeClass('active');
    
        setTimeout(function () {
          $('.con__slide--' + nextSlide).addClass('active');
        }, nextSlideSpd);
    
        ////////// Nav //////////
        $('.con__nav-item--' + slide).removeClass('nav-active');
        $('.con__nav-item--' + nextSlide).addClass('nav-active');
    
        setTimeout(function () {
          animating = false;
        }, animTime);
      }
    
      // Mouse wheel trigger
      $(document).on('mousewheel DOMMouseScroll', function (e) {
        var delta = e.originalEvent.wheelDelta;
        if (animating) return;
        // Mouse Up
        if (delta > 0 || e.originalEvent.detail < 0) {
          navigateUp();
        } else {
          navigateDown();
        }
      });
    
      // Direct trigger
      $(document).on("click", ".con__nav-item:not(.nav-active)", function () {
        // Essential to convert target to a number with +, so curSlide would be a number
        var target = +$(this).attr('data-target');
        if (animating) return;
        pagination(curSlide, target);
        curSlide = target;
      });
    
      // Arrow trigger
      $(document).on('click', '.con__nav-scroll', function () {
        var target = $(this).attr('data-target');
        if (animating) return;
        if (target === 'up') {
          navigateUp();
        } else {
          navigateDown();
        }
      });
    
      // Key trigger
      $(document).on("keydown", function (e) {
        if (animating) return;
        if (e.which === 38) {
          navigateUp();
        } else if (e.which === 40) {
          navigateDown();
        }
      });
    

    
    });  
    
    
    
    
    
    
});