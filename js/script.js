$(document).ready(function () {
  if (!$('#myCanvas').tagcanvas({
    textColour: '#000000',
    outlineThickness: 0.5,
    outlineColour: '#fe0853',
    maxSpeed: 0.06,
    freezeActive: true,
    shuffleTags: true,
    shape: 'sphere',
    zoom: 1,
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


// bubble link prevention
document.getElementById("nothing").addEventListener("click", function(event){
  event.preventDefault()
  });