$(function() {
  var $header = $('header');
  var $mainNav = $header.find('.main-nav');
  var $mainNavItem = $mainNav.find('.main-nav-item');
  var $mainNavIconContent = $mainNavItem.find('.main-nav-icon-content');
  var $mainNavIconBghex = $mainNavItem.find('.main-nav-icon-bghex');


  $mainNavIconContent.on('mouseover', function() {
    $(this).next().children('div').css( "background-color", "#492445" );
    $(this).next().children('div').animate({
      opacity: '1',
    }, 100);
  });
   $mainNavIconContent.on('mouseleave', function() {
    $(this).next().children('div').animate({
      opacity: '0.35',
    }, 100);
    $(this).next().children('div').css( "background-color", "white" );
  });
   $mainNavIconContent.on('click', function() {
     $(this).next().children('div').css( "background-color", "#492445" );
     $(this).next().children('div').animate({
       opacity: '1',
  }, 100);
  });

  $("#example-one").on("click", function() {
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

  var $window           = $(window),
      win_height_padded = $window.height() * 1.1,
      isTouch           = Modernizr.touch;
 $window.on('scroll', revealOnScroll);

 function revealOnScroll() {
  var scrolled = $window.scrollTop();

  $(".revealOnScroll:not(.web-design)").each(function () {
    var $this     = $(this),
        offsetTop = $this.offset().top;

    if (scrolled + win_height_padded > offsetTop) {
      if ($this.data('timeout')) {
        window.setTimeout(function(){
          $this.addClass('web-design ' + $this.data('animation'));
        }, parseInt($this.data('timeout'),10));
      } else {
        $this.addClass('web-design ' + $this.data('animation'));
      }
    }
  });


}

})
