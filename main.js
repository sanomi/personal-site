$(function(){
	init();
	});

function init() {
	var vid = document.getElementById("myVideo");
	vid.playbackRate = 0.4;
	if($(window).width()>=360) {
		$("#page-wrap").addClass('vMiddle')
		.wrapInner("<table border='0' cellpadding='0' cellspacing='0'><tr>");
		$("section").wrap("<td></td>");
		$("body").mousewheel(function(event, delta) {
			this.scrollLeft -= (delta * 30);
			event.preventDefault();
		});  
	if($(window).width()<=900){
		$('#about').unwrap();
		var divhtml = $("#about").html();
		var myps = divhtml.split("<em></em>");
		var myhtml = "<td><section class='space wide'>"+myps[0]+"</section></td><td><section class='space wide'><div class='profileWrap'>"+myps[1]+"</div></section></td>";
		$("#about").css('width','200vw').html(myhtml);
			}
	}
}