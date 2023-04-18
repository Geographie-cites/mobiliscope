// info page left menu
//console.log('leftmenu');
var pathName = window.location.pathname;
var urlPath = '';

/*browser history*/
window.onpopstate = function(e){
    if(e.state){
      window.location = e.state.url;
    }
};

function openSelectedMenu(){
  $('.menu-item-container').each(function( index ) {
   if(  $(this).find("a").attr('class') === "menu-item current-page"){
    $(this).find("a.menu-item").addClass('opened-item');
     $(this).find(".left-menu-niv2").css("display","block");
   }
  })
}

function activateMenu(){
  $('.left-menu-niv2 a').map(function(index) {
  var btnRef = $(this).attr('href');
    if (pathName === btnRef){
       $(this).find(".item").toggleClass('current');
    }
  })

}

function closeAllMenu(){
  $('.menu-item-container').each(function( index ) {
     $(this).find(".left-menu-niv2").css("display","none");
     $(this).find("a").removeClass('current-page');
     $(this).find(".item").removeClass('current');
  })
}


$( document ).ready(function() {

  $(".left-menu-niv2").css("display","none");
  openSelectedMenu();
  activateMenu();


  $(".menu-item-container").click(function() {

    $(".left-menu-niv2").css("display","none");

    $('a.menu-item').removeClass('opened-item');
    $(this).find('a.menu-item').addClass('opened-item');

    $(this).find(".left-menu-niv2").css("display","block");

    //openSelectedMenu();  //KEEP CURRENT MENU  OPENED
  });



  $(".left-menu-niv2 a").click(function(e){
    e.preventDefault();
    closeAllMenu();
    $(this).parent().prev().addClass('current-page');
    $(this).find(".item").toggleClass('current');
    $('.breadcrumb-container').find('.cur-bc-subpage').html($(this).find('.item').html());
    $('.breadcrumb-container').find('.cur-bc-page').html($(this).parent().prev('.menu-item').html());
    urlPath = $(this).attr('href');
    var subpage = '/ajax' + urlPath;
    $("#page-loader").fadeTo(100,0,function(){
      $.ajax({url: subpage, cache: false, dataType: "html"}).done(
        function(html){
          $("#page-loader").html(html).fadeTo(100,100);
          if(window.history !== undefined)
            window.history.pushState({"url":urlPath},"", urlPath);
          openSelectedMenu();
          $(this).find(".item").toggleClass('current');
        }
      );
    });
  });
});



