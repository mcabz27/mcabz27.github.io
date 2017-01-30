$(document).ready(function(){

  $('nav').addClass('teal darken-4');
  $('.slide').hide(); //hide slide initially

  $('.toggleMenu').click(function() {
    console.log('hello');
    if ($('.menu').is(':visible')) { // https://api.jquery.com/visible-selector/ when clicked, if menu is visible, hide it/show home
      $('.menu').hide();
      $('.homepage').show();
      $('.toggleMenu').text('Open Menu');  //changed btn text to open
    }
    else { //hides slide and shows menu when clicked if menu not visible
      $('.slide').hide();
      $('.menu').show();
      $('.homepage').hide();
      $('nav').removeClass('lime accent-4');
      $('nav').addClass('teal darken-4');
      $('.toggleMenu').text('Close Menu');  //changed btn text to close
    }
  });

  $('.selected').click(function() { //when selected div clicked do...
    $('.menu').hide(); //hide menu onclick
    if($(this).hasClass('aboutMeBtn') === true) { //if btn has a class of aboutMeBtn, show aboutMe slide
      $('.aboutMe').show();
      $('.toggleMenu').text('Open Menu');  //changed btn text to open
      $('nav').removeClass('teal darken-4 light-blue darken-4 deep-purple'); //removes classes from nav to match up
      $('nav').addClass('lime accent-4'); //gives nav bar same color as slide
    } else if($(this).hasClass('projectsBtn') === true) { //if btn has a class of projectsBtn, show projects slide
      $('.projects').show();
      $('.toggleMenu').text('Open Menu'); //changed btn text to open
      $('nav').removeClass('teal darken-4 lime accent-4 deep-purple'); //removes classes from nav to match up
      $('nav').addClass('light-blue darken-4'); //gives nav bar same color as slide
    } else if($(this).hasClass('contactBtn') === true) { //if btn has a class of contactBtn, show contact slide
      $('.contact').show();
      $('.toggleMenu').text('Open Menu');  //changed btn text to open
      $('nav').removeClass('teal darken-4 lime accent-4 light-blue'); //removes classes from nav to match up
      $('nav').addClass('deep-purple darken-4'); //gives nav bar same color as slide
    }
  });

}); //ends ready function
