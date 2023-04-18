$(document).mouseup(function (e) {

	var container = $("#popup");

	if (!container.is(e.target) // if the target of the click isn't the container...
	    && container.has(e.target).length === 0) // ... nor a descendant of the container
	{
	    container.css("display", "none") ;
			$(".popup-container").css("display", "none") ;
	}

});


// Indicators menu popups
$('.helpAcc').click(function(e){
	popitup(e,$(this).data('indicateur'))
});

function popitup(e,ind){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;

	// Le contenu des popups varie selon l'indicateur
	// et parfois selon la zone géo ou le pays
	let text = '';
	if (ind == 'cleduc' || ind == 'educmen' || ind == 'pop' || ind == 'act') {
		text = translation['popup'][ind][zoneGeo][version]
	} else if (ind == 'reval'){
		text = translation['popup'][ind][ctry][version]
	} else if (ind == 'mode' && ctry == 'CO') {  // le cas très particulier du TransMilenio de Bogota
		text = translation['popup']['mode_co'][version]
	} else {
		text = translation['popup'][ind][version]
	}
	
	let index = 0;
	const regex = /%ind%/ig;

	text = text.replace(regex, function () {
		return gamme[ind][index++];
	});

	$("#text").html(text);

	$("#close").click(function() {
		$("#popup").css("display", "none") ;
		$(".popup-container").css("display", "none") ;
	}) ;

}


// Other popups
function popup_mapTitle1(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html(translation['popupMapTitle'][version]);
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_duncan(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html(translation['popupDuncan'][version]);
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
}

function popup_moran(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html(translation['popupMoran'][version]);
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
}

function popup_source(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html(translation['popupSource'][ctry][version]);
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}
