// JavaScript Document
$(document).ready(function() {
	$('.Carousel > img').css('position','absolute').css('top','0px').css('left','0px');
    		var index = 0;
			var oImg = $('.Carousel img');
			var len = oImg.length;
			var oA = $('.Carou a');

	
		function play(n){
				oImg.eq(n).fadeIn('slow').siblings('.Carousel img').fadeOut('slow');
				oA.removeClass('active');
				oA.eq(n).addClass('active');
				
			}
			
		  oA.eq(0).click(function(){
			  	oImg.eq(0).fadeIn('slow').siblings('.Carousel img').fadeOut('slow');
				oA.removeClass('active');
				$(this).addClass('active');
				
			  });
		  oA.eq(1).click(function(){
			  	oImg.eq(1).fadeIn('slow').siblings('.Carousel img').fadeOut('slow');
				oA.removeClass('active');
				$(this).addClass('active');
			  });
				
		
		setInterval(function(){
				play(index);
				index++;
				if(index==len){
						index=0;
					}
			},2000);
});
