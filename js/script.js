$(document).ready(function (){
  $(".container-fluid").css("display", "none");
  $(".container-fluid").fadeIn(500);
  $('.modal').modal();
  $('.parallax').parallax();
  $('.materialboxed').materialbox();
  $('.tap-target').tapTarget();
  $('.carousel').carousel({
    duration: 100,
    padding: -100,
    numVisable: 3,
    indicators: true,
    dist: -100,
});
  $(".transition").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $(".container-fluid").fadeOut(250, redirectPage);      
});

if (!$('#myCanvas').tagcanvas({
  textColour: '#fff',
  outlineThickness: 0.5,
  outlineColour: '#7289DA',
  shadow: '#7289DA',
  shadowBlur: 0,
  shadowOffset: [1.5,1.5],
  maxSpeed: 0.04,
  freezeActive: true,
  shuffleTags: true,
  shape: 'sphere',
  zoom: 0.95,
  textFont: "Helvetica, Arial, sans-serif",
  textHeight: 18,
  pinchZoom: true,
  freezeDecel: true,
  fadeIn: 1500,
  initial: [0.3, -0.1],
  depth: 0.8,
  clickToFront: 1500
})) {
  // TagCanvas failed to load
  $('#myCanvasContainer').hide();
}
     
function redirectPage() {
    window.location = linkLocation;
}
});

// bubble link prevention
document.getElementById("nothing").addEventListener("click", function(event){
  event.preventDefault()
  });