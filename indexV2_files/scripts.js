var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($){"use strict";var $window=$(window);$window.on('load',function(){$window.trigger("resize");});$('.loader').fadeOut();$('.loader-mask').delay(350).fadeOut('slow');initOwlCarousel();setTimeout(function(){initFlickity();},1000);$window.on('resize',function(){hideSidenav();megaMenu();});var minWidth;if(Modernizr.mq('(min-width: 0px)')){minWidth=function(width){return Modernizr.mq('(min-width: '+width+'px)');};}
else{minWidth=function(width){return $window.width()>=width;};}
if(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)){$("html").addClass("mobile");$('.dropdown-toggle').attr('data-toggle','dropdown');}
else{$("html").removeClass("mobile");}
if(Function('/*@cc_on return document.documentMode===10@*/')()){$("html").addClass("ie");}
$window.scroll(function(){scrollToTop();var $stickyNav=$('.nav--sticky');if($(window).scrollTop()>190){$stickyNav.addClass('sticky');}else{$stickyNav.removeClass('sticky');}
if($(window).scrollTop()>200){$stickyNav.addClass('offset');}else{$stickyNav.removeClass('offset');}
if($(window).scrollTop()>500){$stickyNav.addClass('scrolling');}else{$stickyNav.removeClass('scrolling');}});var $sidenav=$('#sidenav'),$mainContainer=$('#main-container'),$navIconToggle=$('.nav-icon-toggle'),$navHolder=$('.nav__holder'),$contentOverlay=$('.content-overlay'),$htmlContainer=$('html'),$sidenavCloseButton=$('#sidenav__close-button');$navIconToggle.on('click',function(e){e.stopPropagation();$(this).toggleClass('nav-icon-toggle--is-open');$sidenav.toggleClass('sidenav--is-open');$contentOverlay.toggleClass('content-overlay--is-visible');});function resetNav(){$navIconToggle.removeClass('nav-icon-toggle--is-open');$sidenav.removeClass('sidenav--is-open');$contentOverlay.removeClass('content-overlay--is-visible');}
function hideSidenav(){if(minWidth(992)){resetNav();setTimeout(megaMenu,500);}}
$contentOverlay.on('click',function(){resetNav();});$sidenavCloseButton.on('click',function(){resetNav();});var $dropdownTrigger=$('.nav__dropdown-trigger'),$navDropdownMenu=$('.nav__dropdown-menu'),$navDropdown=$('.nav__dropdown');if($('html').hasClass('mobile')){$('body').on('click',function(){$navDropdownMenu.addClass('hide-dropdown');});$navDropdown.on('click','> a',function(e){e.preventDefault();});$navDropdown.on('click',function(e){e.stopPropagation();$navDropdownMenu.removeClass('hide-dropdown');});}
$('.sidenav__menu-toggle').on('click',function(e){e.preventDefault();var $this=$(this);$this.parent().siblings().removeClass('sidenav__menu--is-open');$this.parent().siblings().find('li').removeClass('sidenav__menu--is-open');$this.parent().find('li').removeClass('sidenav__menu--is-open');$this.parent().toggleClass('sidenav__menu--is-open');if($this.next().hasClass('show')){$this.next().removeClass('show').slideUp(350);}else{$this.parent().parent().find('li .sidenav__menu-dropdown').removeClass('show').slideUp(350);$this.next().toggleClass('show').slideToggle(350);}});(function(){var navSearchTrigger=$('.nav__search-trigger'),navSearchTriggerIcon=navSearchTrigger.find('i'),navSearchBox=$('.nav__search-box'),navSearchInput=$('.nav__search-input');navSearchTrigger.on('click',function(e){e.preventDefault();navSearchTriggerIcon.toggleClass('ui-close');navSearchBox.slideToggle();navSearchInput.focus();});})();function megaMenu(){$('.nav__megamenu').each(function(){var $this=$(this);$this.css('width',$('.container').width());var offset=$this.closest('.nav__dropdown').offset();offset=offset.left;var containerOffset=$(window).width()-$('.container').outerWidth();containerOffset=containerOffset/2;offset=offset-containerOffset-15;$this.css('left',-offset);});}
if($('#tweets').length){function initTwitter(){var config1={"id":'594366594521804800',"domId":'tweets',"showUser":false,"showInteraction":false,"showPermalinks":false,"showTime":true,"maxTweets":2,"enableLinks":true};twitterFetcher.fetch(config1);}
initTwitter();}
(function(){var videoPlaylistListItem=$('.video-playlist__list-item'),videoPlaylistContentVideo=$('.video-playlist__content-video');videoPlaylistListItem.on('click',function(e){e.preventDefault();var $this=$(this);var thumbVideoUrl=$this.attr('href');videoPlaylistContentVideo.attr('src',thumbVideoUrl);$this.siblings().removeClass('video-playlist__list-item--active');$this.addClass('video-playlist__list-item--active');});})();var $newsTicker=$('.newsticker__list');if($newsTicker.length){$newsTicker.newsTicker({row_height:34,max_rows:1,prevButton:$('#newsticker-button--prev'),nextButton:$('#newsticker-button--next')});}
$('.tabs__trigger').on('click',function(e){var currentAttrValue=$(this).attr('href');$('.tabs__content-trigger '+currentAttrValue).stop().fadeIn(1000).siblings().hide();$(this).parent('li').addClass('tabs__item--active').siblings().removeClass('tabs__item--active');e.preventDefault();});function initOwlCarousel(){$("#owl-hero-slider").owlCarousel({center:true,items:1,loop:true,nav:true,dots:false,margin:8,lazyLoad:true,navSpeed:500,navText:['<i class="ui-arrow-left">','<i class="ui-arrow-right">'],responsive:{1200:{items:4},768:{items:2},540:{items:2}}});$("#owl-posts").owlCarousel({center:false,items:1,loop:true,nav:true,dots:false,margin:30,lazyLoad:true,navSpeed:500,navText:['<i class="ui-arrow-left">','<i class="ui-arrow-right">'],responsive:{768:{items:4},540:{items:3}}});$("#owl-posts-3-items").owlCarousel({center:false,items:1,loop:true,nav:true,dots:false,margin:20,lazyLoad:true,navSpeed:500,navText:['<i class="ui-arrow-left">','<i class="ui-arrow-right">'],responsive:{768:{items:3},540:{items:2}}});$("#owl-headlines").owlCarousel({items:1,loop:true,nav:false,dots:false,lazyLoad:true,navSpeed:500,navText:['<i class="ui-arrow-left">','<i class="ui-arrow-right">']});$("#owl-single").owlCarousel({items:1,loop:true,nav:true,dots:false,lazyLoad:true,navSpeed:500,navText:['<i class="ui-arrow-left">','<i class="ui-arrow-right">']});$("#owl-single-post-gallery").owlCarousel({items:1,loop:true,nav:true,dots:true,lazyLoad:true,navSpeed:500,navText:['<i class="ui-arrow-left">','<i class="ui-arrow-right">']});var owlCustomNav=$('#owl-headlines').owlCarousel();$(".owl-custom-nav__btn--prev").on('click',function(){owlCustomNav.trigger('prev.owl.carousel');});$(".owl-custom-nav__btn--next").on('click',function(){owlCustomNav.trigger('next.owl.carousel');});};function initFlickity(){$('#flickity-hero').flickity({cellAlign:'left',contain:true,pageDots:false,prevNextButtons:false,draggable:false});$('#flickity-thumbs').flickity({cellAlign:'left',asNavFor:'#flickity-hero',contain:true,pageDots:false,prevNextButtons:false,draggable:false});}
(function(){var $stickyCol=$('.sticky-col');if($stickyCol.length>0){$stickyCol.stick_in_parent({offset_top:80});}})();var submitContact=$('#submit-message'),message=$('#msg');submitContact.on('click',function(e){e.preventDefault();var $this=$(this);$.ajax({type:"POST",url:'contact.php',dataType:'json',cache:false,data:$('#contact-form').serialize(),success:function(data){if(data.info!=='error'){$this.parents('form').find('input[type=text],input[type=email],textarea,select').filter(':visible').val('');message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');}else{message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');}}});});function scrollToTop(){var scroll=$window.scrollTop();var $backToTop=$("#back-to-top");if(scroll>=50){$backToTop.addClass("show");}else{$backToTop.removeClass("show");}}
$('a[href="#top"]').on('click',function(){$('html, body').animate({scrollTop:0},1000,"easeInOutQuint");return false;});})(jQuery);

}
/*
     FILE ARCHIVED ON 12:38:56 Oct 20, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:30:33 Nov 10, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 562.905
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.073
  RedisCDXSource: 24.104
  esindex: 0.01
  LoadShardBlock: 520.941 (3)
  PetaboxLoader3.datanode: 507.622 (4)
  CDXLines.iter: 15.546 (3)
  PetaboxLoader3.resolve: 289.819 (2)
  load_resource: 322.813
*/