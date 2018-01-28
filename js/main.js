$(document).ready(function() {
	var block1 = $('.wecan-hide-block-1');
	var block2 = $('.wecan-hide-block-2');
	var mark1 = $('.wecan-que-mark-1');
	var mark2 = $('.wecan-que-mark-2');
		mark1.click(function() {
			block1.toggle()
		});
		mark2.click(function() {
			block2.toggle()
		});

		
		$(window).scroll(function() {
    	$('.mov2').each(function(){
      	var imagePos = $('.main').offset().top;
      	var topOfWindow = $(window).scrollTop();
      	if (imagePos < topOfWindow+500) {
        $(this).addClass('fadeInLeft');
      }
    });
  });
		$(window).scroll(function() {
    	$('.mov3').each(function(){
      	var imagePos = $('.main').offset().top;
      	var topOfWindow = $(window).scrollTop();
      	if (imagePos < topOfWindow+500) {
        $(this).addClass('fadeInRight');
      }
    });
  });
		$(window).scroll(function() {
    	$('.mov4').each(function(){
      	var imagePos = $(this).offset().top;
      	var topOfWindow = $(window).scrollTop();
      	if (imagePos < topOfWindow+600) {
        $(this).addClass('fadeInLeftBig');
      }
    });
  });

});
