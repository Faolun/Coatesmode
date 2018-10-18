$(document).ready(function (){
  $(".container-fluid").css("display", "none");
  $(".container-fluid").fadeIn(500);
  $(".transition").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $(".container-fluid").fadeOut(250, redirectPage);      
});
     
function redirectPage() {
    window.location = linkLocation;
}
})



$(document).ready(function () {
  if (!$('#myCanvas').tagcanvas({
    textColour: '#000000',
    outlineThickness: 0.5,
    outlineColour: '#fe0853',
    maxSpeed: 0.06,
    freezeActive: true,
    shuffleTags: true,
    shape: 'sphere',
    zoom: 0.95,
    textFont: "Helvetica, Arial, sans-serif",
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
});

$(document).ready(function () {
  $('.materialboxed').materialbox();
});

$(document).ready(function () {
  $('.carousel').carousel({
      duration: 100,
      padding: -100,
      numVisable: 3,
      indicators: true,
      dist: -100,

  });
});


// bubble link prevention
document.getElementById("nothing").addEventListener("click", function(event){
  event.preventDefault()
  });