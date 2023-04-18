console.log('controller.js')
initGeovizMenu();
initLeafletMap();
initCodeSec();



/* UPDATE SHARE LINKS*/
$( document ).ready(function() {

  $('.niv-logo button').click(function(){
		loadGeoviz($(this).data('iduphp'), $(this).data('color'))
	})

	$('.leaflet-control-layers-list label input').change(function(e){
		setLayerController();
	});

  $(".share-container").click(function(e){
  	getShareInfo($(this).attr('id'))
	});

});

