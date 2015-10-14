// JavaScript Document

function isLoad(t)
{
	  var music = document.getElementById("music_audio");
	  music.play();
	  if (t) window.clearInterval(t);		
}

t = window.setInterval(function() {
   isLoad(t);
}, 700);

	
function opend(){
	 $(".audio_close").show();
	 $(".audio_open").hide();
	 /*原生控制*/
	 var music = document.getElementById("music_audio");
	 music.pause();
	 return true;
}

function closed(){
	$(".audio_close").hide();
	$(".audio_open").show();
	/*原生控制*/
	var music = document.getElementById("music_audio");
	music.play();
	return true;
}

