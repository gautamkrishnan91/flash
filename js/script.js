$(document).ready(function () {
	$(".toggle").click(function(){
		$(".flash-upper").toggleClass("flash-upper-anim");
		$(".flash-lower").toggleClass("flash-lower-anim");
		$("#toggleClass").toggleClass("toggle-play toggle-pause");
	});
});