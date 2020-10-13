$(document).ready(function () {
  //header js//
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".header").addClass("fixedMenu");
    } else {
      $(".header").removeClass("fixedMenu");
    }
  });


  // counting ja //
  jQuery(document).ready(function ($) {
    $('.counting').counterUp({
      delay: 10,
      time: 1000
    });
  });



  // up icon js //
  $('.up_icon a[href^="#"').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 2000);
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 70) {
      $(".up_icon").addClass("up_iconFixd");
    } else {
      $(".up_icon").removeClass("up_iconFixd");
    }
  });

  // slider js// 
  $('.main_slieda_ttstmonials').slick({
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    centerPadding: '0',
    centerMode: false,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1500,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      }
    ]
  });

  $('.sssyour-class').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      }
    ]
  });
  //===============instgam==========//
  $('.slider_main').slick({
    arrows: true,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      }
    ]
  });
  //=====================countundoen ========//


  $('.latest_news_slied').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      }
    ]
  });

var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countDown").innerHTML =
  "<span>"+days + "<br>" + "<span>"+ "days "+"</span>" +"</span>" +
  "<span>"+hours + "<br>" + "<span>"+ "hours "+"</span>" +"</span>"+
  "<span>"+ minutes + "<br>"+ "<span>"+ "minutes "+"</span>" +"</span>"+
  "<span>"+ seconds + "<br>"+ "<span>"+ "second "+"</span>" +"</span>";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "EXPIRED";
  }
}, 1000);

    
//========== filtering========== //

});
