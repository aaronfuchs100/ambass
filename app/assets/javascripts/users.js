 $(document).ready(function(){

    // cache container
    var $container = $('.design');
    // initialize isotope
    $container.isotope({
      // options...
    });

    // filter items when filter link is clicked
    $('#test a').click(function(){
      var selector = $(this).attr('data-filter');
      console.log(selector);
      $container.isotope({ filter: selector });
      return false;
    });
  });

