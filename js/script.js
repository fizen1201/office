AOS.init();

//Navbar Toggler //
$(".navbar-toggler").hover(function () {
  $('.navbar').removeClass("bg-transparent").css("transition-duration", "0.8s").addClass("bg-dark");
}, function () {
  $('.navbar').css("transition-duration", "0.8s").removeClass("bg-dark").addClass("bg-transparent");
});

// NavBar Tweak On scroll to about 
(function ($) {
  $(document).ready(function () {
    $(function () {
      $(window).scroll(function () {
        var apos = $('#about').position();
        if ($(this).scrollTop() > apos.top) {
          $('.navbar').addClass("posnavbar");
        } else {
          $('.navbar').removeClass("posnavbar");
        }
      });
    });
  });
}(jQuery));

// Vahin Printers Animation //
$(function () {
  $('.intro').addClass('go');
  $('.reload').click(function () {
    $('.intro').removeClass('go').delay(200).queue(function (next) {
      $('.intro').addClass('go');
      next();
    });

  });
})

// Typing Animation Your one stop for...
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};
TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
  var that = this;
  var delta = 300 - Math.random() * 100;
  if (this.isDeleting) {
    delta /= 2;
  }
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
  setTimeout(function () {
    that.tick();
  }, delta);
};
window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


// H1 on click heartbeat animation Tweak //
$(".heading").hover(
  function () {
    $(this).addClass("animate__heartBeat");
  },
  function () {
    $(this).removeClass("animate__heartBeat");
  }
);
// CARD //
$(".card").hover(function () {
  $(this).addClass("carousel-inner-shadow");
}, function () {
  $(this).removeClass("carousel-inner-shadow");
});
//Card Shadow Effects //
$(".card-img-top").hover(
  function () {
    $(this).addClass("card-img-shadow");
  },
  function () {
    $(this).removeClass("card-img-shadow");
  }
);
//Navbar Brand Hover flashing effect//
$(".navbar-brand").hover(
  function () {
    $(this).addClass("animate__jello");
  },
  function () {
    $(this).removeClass("animate__jello");
  }
);

$(".card-img-top").on("click",function(){
  $(".row").css("display", "flex");
});
// Samples 
$('#Paper').on('click', function(){
  $('.paperbags').toggle(1000);
});

$('#Catalogue').on('click', function(){
  $('.catalogue').toggle(1000);
});
$('#Folders').on('click', function(){
  $('.folders').toggle(1000);
});
  $('#Stationary').on('click', function(){
    $('.stationary').toggle(1000);
  });
  $('#Books').on('click', function(){
    $('.books').toggle(1000);
  });
  $('#Flyer').on('click', function(){
    $('.flyer').toggle(1000);
  });
  $('#Magazine').on('click', function(){
    $('.magazine').toggle(1000);
  });
//OWL carousel Client's Section//
$('.clientowl').owlCarousel({
  loop: true,
  margin: 25,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  responsiveClass: true,
  dots: false,
  responsive: {
    0: {
      items: 3,
      nav: false
    },
    600: {
      items: 2,
      loop: true
    },
    1000: {
      items: 5,
      loop: true
    }
  }
});

$('.testiowl').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3500,
  autoplayHoverPause: true,
  responsiveClass: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 1,
      loop: true
    },
    1000: {
      items: 1,
      loop: true
    }
  }
});

$('.sampleowl').owlCarousel({
  loop:true,
  animateOut: 'slideOutDown',
    animateIn: 'flipInX',
  margin:5,
  nav:false,
  dots:false,
  autoplay: true,
  autoplayTimeout: 2100,
  autoplayHoverPause: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});


$('.workowl').owlCarousel({
  loop:false,
  margin:20,
  nav:false,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:3
      }
  }
})

$('.newrow').owlCarousel({
  loop:false,
    autoplay: false,
  autoplayTimeout: 2100,
  autoplayHoverPause: true,
  margin:20,
  dots: false,
  nav:false,
  responsiveClass: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});

