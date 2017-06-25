$(function() {
  var $header = $('header');
  var $mainNav = $header.find('.main-nav');
  var $mainNavItem = $mainNav.find('.main-nav-item a');


  $mainNavItem.on('mouseover', function() {
    $(this).next().children('div').css( "background-color", "#492445" );
    $(this).next().children('div').animate({
      opacity: '1',
    }, 100);
  });
   $mainNavItem.on('mouseleave', function() {
    $(this).next().children('div').animate({
      opacity: '0.35',
    }, 100);
    $(this).next().children('div').css( "background-color", "white" );
  });
   $mainNavItem.on('click', function() {
     $(this).next().children('div').css( "background-color", "#492445" );
     $(this).next().children('div').animate({
       opacity: '1',
  }, 100);
  });


  $('.carousel').carousel({
  interval: 500
})

  $("#example-two").on("click", function() {
    var el = $(this);
    if (el.text() == el.data("text-swap")) {
      el.text(el.data("text-original"));
      $('.about-show-more').css('display', 'none');
    } else {
      el.data("text-original", el.text());
      el.text(el.data("text-swap"));
      $('.about-show-more').css('display', 'block');
    }
  });

	var selectedClass = "";

	$(".btn-category").click(function(){
  	selectedClass = $(this).attr("data-rel");
    $(".gallery").fadeTo(100, 0.1);
  	$(".gallery div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $(".gallery").fadeTo(300, 1);
    }, 300);

});

});
