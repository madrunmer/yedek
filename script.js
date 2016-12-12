$(document).ready(function(){
	var son = $(".resim img:last").index();
	var ilk = $(".resim img:first").index();
	$("#dis img").click(function(){
		$(".resim_orta").fadeIn(1000);
		var index = $(this).index();
		$(".resim img").hide();
		$(".resim img:eq("+index+")").show();
			if (index==son) {
				$(".saga").hide();
			}
			else if(index==ilk){
				$(".sola").hide();	
			}else
			{
				$(".saga,.sola").show();
			}
				$("body").prepend("<div class='degis'>&nbsp</div>")
	});
	$(".kapat").click(function(){
			$(".resim_orta").hide();
			$(".degis").hide();
	});
	$(".saga").click(function(){
		var src=$(".resim img:visible").next().index();
		$(".sola").show();
		if(src==son){
			$(".saga").fadeOut();
		}
		if(src==son+1){
		}
		else{
			$(".saga").show();
			$(".resim img").hide();
			$(".resim img:eq("+src+")").show();

		}
	});
	$(".sola").click(function(){
		var src = $ (".resim img:visible").prev().index();
		$(".saga").show();
		if(src==ilk){
			$(".sola").fadeOut();
		}
		if(src==son+1){
		}
		else{
			$(".sola").show();
			$(".resim img").hide();
			$(".resim img:eq("+src+")").show();

		}
	});
	/* var blok = $('#orta');
    var yuk = $(window).height();
    var gen = $(document).width();
    var sT = window.scrollY;
     $('.jquerydeneme').css({
        left : gen/2 - (blok.width() / 2),
        top : sT + yuk/2 - (blok.height() / 2)
    });*/
	$("#a1").click(function(){

		$("#header_icerik").css("background","url('img/photo2.jpg')");
		/*$("#header").css("background","rgb(25,25,25)");*/
		$("#header").css("background","url('img/sta.png')");
		$(".b1").fadeIn(500);
		$(".b2").hide(0);
		$(".b3").hide(0);
		$(".b4").hide(0);
		$(".b5").hide(0);
		$(".b6").hide(0);
		/*$("#foto").show(0);
		$("#foto").css("background","url('img/icon2.png')");
		$("#foto").css("text.align","center");
		$(".jquerydeneme").html("#HelloWorld");
		$(".jquerydeneme").css("font-size","60px");
		$(".jquerydeneme").css("color","white");
		$(".jquerydeneme").css("font-family","Calibri");
		$(".jquerydeneme").css("background","grey");
		$(".jquerydeneme2").html("2016");
		$(".jquerydeneme2").css("font-size","25px");
		$(".jquerydeneme2").css("color","white");
		$(".jquerydeneme2").css("font-family","Calibri");
		$(".jquerydeneme2").css("color","aqua");*/
	});
	$("#a2").click(function(){

		$("#header_icerik").css("background","url('img/photo6.jpg')");
		$("#header").css("background","url('img/sta.png')");
		$(".b1").hide(0);
		$(".b2").fadeIn(500);
		$(".b3").hide(0);
		$(".b4").hide(0);
		$(".b5").hide(0);
		$(".b6").hide(0);
	});
	$("#a3").click(function(){

		$("#header_icerik").css("background","url('img/photo7.jpg')");
		$("#header").css("background","url('img/sta.png')");
		$(".b1").hide(0);
		$(".b2").hide(0);
		$(".b3").fadeIn(500);
		$(".b4").hide(0);
		$(".b5").hide(0);
		$(".b6").hide(0);
	});
	$("#a4").click(function(){

		$("#header_icerik").css("background","url('img/photo8.jpg')");
		$("#header").css("background","url('img/sta.png')");
		$(".b1").hide(0);
		$(".b2").hide(0);
		$(".b3").hide(0);
		$(".b4").fadeIn(500);
		$(".b5").hide(0);
		$(".b6").hide(0);

	});
	$("#a5").click(function(){

		$("#header_icerik").css("background","url('img/photo3.jpg')");
		$("#header").css("background","url('img/star.jpg')");
		$(".b1").hide(0);
		$(".b2").hide(0);
		$(".b3").hide(0);
		$(".b4").hide(0);
		$(".b5").fadeIn(500);
		$(".b6").hide(0);
	});

	$("#a6").click(function(){

		$("#header_icerik").css("background","url('img/photo4.jpg')");
		$("#header").css("background","url('img/star.jpg')");
		$(".b1").hide(0);
		$(".b2").hide(0);
		$(".b3").hide(0);
		$(".b4").hide(0);
		$(".b5").hide(0);
		$(".b6").fadeIn(500);
	});



});