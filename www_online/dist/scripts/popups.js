function popitup(p,n){p.stopPropagation(),$("#popup").css("display","block"),$(".popup-container").css("display","inherit");let o="";o="cleduc"==n||"educmen"==n||"pop"==n||"act"==n?translation.popup[n][zoneGeo][version]:"reval"==n?translation.popup[n][ctry][version]:"mode"==n&&"CO"==ctry?translation.popup.mode_co[version]:translation.popup[n][version];let s=0;o=o.replace(/%ind%/gi,(function(){return gamme[n][s++]})),$("#text").html(o),$("#close").click((function(){$("#popup").css("display","none"),$(".popup-container").css("display","none")}))}function popup_mapTitle1(){$("#popup").css("display","block"),$(".popup-container").css("display","inherit"),$("#text").html(translation.popupMapTitle[version]),$("#close").click((function(){$("#popup").css("display","none"),$(".popup-container").css("display","none")}))}function popup_duncan(){$("#popup").css("display","block"),$(".popup-container").css("display","inherit"),$("#text").html(translation.popupDuncan[version]),$("#close").click((function(){$("#popup").css("display","none")}))}function popup_moran(){$("#popup").css("display","block"),$(".popup-container").css("display","inherit"),$("#text").html(translation.popupMoran[version]),$("#close").click((function(){$("#popup").css("display","none")}))}function popup_source(){$("#popup").css("display","block"),$(".popup-container").css("display","inherit"),$("#text").html(translation.popupSource[ctry][version]),$("#close").click((function(){$("#popup").css("display","none"),$(".popup-container").css("display","none")}))}$(document).mouseup((function(p){var n=$("#popup");n.is(p.target)||0!==n.has(p.target).length||(n.css("display","none"),$(".popup-container").css("display","none"))})),$(".helpAcc").click((function(p){popitup(p,$(this).data("indicateur"))}));