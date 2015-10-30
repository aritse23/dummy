$(document).ready(function(){
	$(".menu").click(function(event){
		event.preventDefault();
		$(".buttons").slideToggle();
	});
});