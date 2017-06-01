$(function() {
  console.log('dziala');
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






})
