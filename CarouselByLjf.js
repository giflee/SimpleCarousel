// JavaScript Document
$(document).ready(function() {
	$('.Carousel > img').css('position','absolute').css('top','0px').css('left','0px');
    		var index = 0;
			var oImg = $('.Carousel > img');
			var len = oImg.length;
			var oA = $('.Carou a');
			var Alen = oA.length;
			var oCarou = $('.Carou');
			oCarou.css('width',((2*Alen-1)*8+20));
			
		setInterval(function(){
			    index=index%len; 
				play(index);
				index++;
			                   },3000);
			
		for(var i=0;i<Alen;i++){
				Aclick(i);
			}

	
		function play(n){
				oImg.eq(n).fadeIn('slow').siblings('.Carousel img').fadeOut('slow');
				oA.removeClass('active');
				oA.eq(n).addClass('active');
				
			}
			
		  /*oA.eq(0).click(function(){
			  	oImg.eq(0).fadeIn('slow').siblings('.Carousel img').fadeOut('slow');
				oA.removeClass('active');
				$(this).addClass('active');
				
			  });
		  oA.eq(1).click(function(){
			  	oImg.eq(1).fadeIn('slow').siblings('.Carousel img').fadeOut('slow');
				oA.removeClass('active');
				$(this).addClass('active');
			  });*/
		function Aclick(m){
			oA.eq(m).click(function(){
			  	oImg.eq(m).fadeIn('slow').siblings('.Carousel img').fadeOut('slow');
				oA.removeClass('active');
				$(this).addClass('active');
				
			  });
			}
			/*setInterval(function(){
				alert(1);
				},3000);*/
				
		
		/*setInterval(function(){
			    index=index%len; 
				play(index);
				index++;
			},3000);*/
});
