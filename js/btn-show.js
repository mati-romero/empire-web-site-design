$(document).ready(function() {
	var infanteria = $('#Infanteria');
	var batallon = $('#Batallon');
	var cuerpo = $('#Cuerpo');

	function allDown() {
		infanteria.css('display','none');
		batallon.css('display','none');
		cuerpo.css('display','none');
	}

	$('.btn-unidad a').on('click',function() {

		allDown();
		
		var me = $($(this).attr('data-unidad'));
		me.fadeToggle(1000);
	});
});