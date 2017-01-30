$(document).ready(function(){

  $('.slide').hide(); //hide slide initially

  $('.toggleMenu').click(function() {
    console.log('hello');
    if ($('.menu').is(':visible')) { // https://api.jquery.com/visible-selector/ when clicked, if menu is visible, hide it/show home
      $('.menu').hide();
      $('.homepage').show();
    }
    else { //hides slide and shows menu when clicked if menu not visible
      $('.slide').hide();
      $('.menu').show();
      $('.homepage').hide();
    }
  });

  $('.selected').click(function() { //when selected div clicked do...
    $('.menu').hide(); //hide menu onclick
    if($(this).hasClass('aboutMeBtn') === true) { //if btn has a class of aboutMeBtn, show aboutMe slide
      $('.aboutMe').show();
    } else if($(this).hasClass('projectsBtn') === true) { //if btn has a class of projectsBtn, show projects slide
      $('.projects').show();
    } else if($(this).hasClass('contactBtn') === true) { //if btn has a class of contactBtn, show contact slide
      $('.contact').show();
    }
  });

}); //ends ready function
