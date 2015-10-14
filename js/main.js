/*
Author by j_un618 2015-10-8
修改：2015/10/9
*/

var _wxheight = 0

//判断移动、PC平台
function browserRedirect() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	var bIsWx = sUserAgent.match(/micromessenger/i) == "micromessenger"; // 微信内置浏览器
	
	if(bIsAndroid||bIsIphoneOs){  
		if(bIsIphoneOs){
			_wxheight = 1038  
		}else{
			if(bIsWx){
				_wxheight = 1008
			}else{
				_wxheight = 930
			}
		}	    
	}
	else{   
	   _wxheight = 1030  
	}
}
browserRedirect();


$(function(){
	
	//音乐控制
	var on = 0
	var music = $("#music_audio")[0];
	music.pause();
	$("#music span").click(function(){
		if(on==0){		
			music.pause();
			$("#music span").removeClass("opend").addClass("closed")
			on=1;
		}else
		{	
			music.play();
			$("#music span").removeClass("closed").addClass("opend")
			on=0;
		}	
	})
	
	var Tstrings = []
	var num = 0

	//自适应PC和移动端
	var _height = $(document.body).height()
	var _width = _height*640/_wxheight
	$("#main_content").css({"width":_width+"px","height":_height+"px"})
	var imgs = $("section img")
	
	for(i=0;i<imgs.length;i++){			
		//图片加载完自适应宽高
		imgs.each(function(e){
			var img = $(this);  
			$("<img/>").attr("src", $(img).attr("src")).load(function() {//注意：$("<img/>")创建一个临时的img标签，类似js创建一个new Image()对象！
			
				//数字进度
				++num;
				$("#loading .txt").html((num/Tstrings.length/2*100).toFixed(0)+"%");
				/*
				如果要获取图片的真实的宽度和高度有必须注意三点
				1、需要创建一个image对象：如这里的$("<img/>")
				2、指定图片的src路径
				3、一定要在图片加载完成后执行如.load()函数里执行，否则获取的宽度和宽度均为0
				*/					 
				realWidth = this.width;
				realHeight = this.height;
				$(img).css({"width":realWidth*_width/640+"px","height":realHeight*_height/_wxheight+"px"});				
			});
		});
		
		//自适应位置
		var imgL = parseInt(imgs.parent("div").eq(i).css("left"))
		var imgT = parseInt(imgs.parent("div").eq(i).css("top"))
		imgs.parent("div").eq(i).css({"left":imgL/640*100+"%","top":imgT/_wxheight*100+"%"})	
		
		Tstrings += imgs.eq(i).attr("src")+","+"images/bg"+(i+1)+".jpg," //累加图片和背景,准备传入预加载
		//console.log(Tstrings)
	}
	console.log(Tstrings.slice(0,Tstrings.length-1))
	
	//图片预加载
	function preloadimages(arr) {
		var newimages = [],
		loadedimages = 0;
		var postaction = function() {};
		var arr = (typeof arr != "object") ? [arr] : arr;
		function imageloadpost() {
			loadedimages++;
			if (loadedimages == arr.length) {
				postaction(newimages);
			}
		}
		for (var i = 0; i < arr.length; i++) {
			newimages[i] = new Image();
			newimages[i].src = arr[i];
			newimages[i].onload = function() {
				imageloadpost();
			}
			newimages[i].onerror = function() {
				imageloadpost();
			}
		}
		return {
			done: function(f) {
				postaction = f || postaction;
			}
		}
	}
	
	preloadimages(['Tstrings.slice(0,Tstrings.length-1)']).done(function(img) {		
		$("#loading .txt").html("100%");
		setTimeout(function(){$("#loading").hide()},300)
		music.play();		
		setTimeout(function(){
			$(".swiper-wrapper").show();
			$(".m1").fadeIn(1000)
		},600)
	});
		
		
});


(function($) {
  $(document).ready(function() {

	  $("section div").hide()
	
	  var swiper = new Swiper('#main_content', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        mousewheelControl: true,
		speed : 1000,
		grabCursor: true,
		longSwipesRatio : 0.3,
		//3D翻转
		effect : 'cube',
		cube: {
		  slideShadows: true,
		  shadow: true,
		  shadowOffset: 100,
		  shadowScale: 0.6
		},
		onSlideChangeStart: function(t) {
			  var curPage = t.activeIndex;			  

			  if (curPage == 0) {
				   setTimeout(function(){
						$(".swiper-wrapper").show();
						$(".m1").fadeIn(1000)
					},300)
			  } else {
				  $(".m1").fadeOut()
			  } 
			  
			  if (curPage == 1) {
				  $(".m2").show()
			  } else {
				  $(".m2").fadeOut()
			  }
			  
			  	
			  if (curPage == 2) {
				  $(".m3").show()
			  } else {
				  $(".m3").fadeOut()
			  }
					
			  if (curPage == 3) {
				  $(".m4").show()
			  } else {
				  $(".m4").fadeOut()
			  }
			  
			  if (curPage == 4) {
				  $(".m5").show()
			  } else {
				  $(".m5").fadeOut()
			  }
			  
			  if (curPage == 5) {
				  $(".m6").show()
			  } else {
				  $(".m6").fadeOut()
			  }
			  
			  if (curPage == 6) {
				  $(".m7").show()
			  } else {
				  $(".m7").fadeOut()
			  }
			  
			  if (curPage == 7) {
				  $(".m8").show()
			  } else {
				  $(".m8").fadeOut()
			  }
			  
			  if (curPage == 8) {
				  $(".m9").show()
			  } else {
				  $(".m9").fadeOut()
			  }
			  
			  if (curPage == 9) {
				  $(".m10").show()
			  } else {
				  $(".m10").fadeOut()
			  }
			  
			  if (curPage == 10) {
				  $(".m11").show()
			  } else {
				  $(".m11").fadeOut()
			  }
			  
			  if (curPage == 11) {
				  $(".m12,.m13,.m14").show()
			  } else {
				  $(".m12,.m13,.m14").fadeOut()
			  }
			  
		  }
	  });
	  
	});


})(jQuery);
