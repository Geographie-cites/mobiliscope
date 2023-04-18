//slideshow

//$(".dropLang").click(function() {
//if ($("#myDropdown").css("display")==="none"){
//  $("#myDropdown").css("display","block");
//}else{
//  $("#myDropdown").css("display","none")
//}
//});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

$(".card-slideshow .prev").click(function plusSlides() {
  showSlides(slideIndex -= 1);
});

$(".card-slideshow .next").click(function plusSlides() {
  showSlides(slideIndex += 1);
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if( typeof slides[slideIndex-1] !== 'undefined'
      && typeof dots[slideIndex-1] ){
    slides[slideIndex-1].style.display = "inline-block";
    dots[slideIndex-1].className += " active";
  }

}
