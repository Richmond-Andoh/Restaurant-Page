$(".button-collapse").sideNav();

$(document).ready(function(){
    $('.carousel').carousel();
  });

  $('.carousel.carousel-slider').carousel({fullWidth: true});

  $(document).ready(function(){
    $('.parallax').parallax();
  });

  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.slider');
  //   var instances = M.Slider.init(elems, options);
  // });

  // Or with jQuery

  $(document).ready(function(){
    $('.slider').slider();
  });