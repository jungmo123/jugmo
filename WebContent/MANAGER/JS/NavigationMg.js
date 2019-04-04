$(function() {
	$(".drop").hover(function() {
		$(this).addClass('open').trigger('show');

	}, function() {
		$(this).removeClass('open');
	});
	
	$("#AllContent form button").click(function(e){
		e.preventDefault();
		$("#productRegistration").modal();
	})
})