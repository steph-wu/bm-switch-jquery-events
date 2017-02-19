$(document).ready(function() {
  console.log("Document is ready!")

  $('.switch').on('click', function () {
    console.log("Click registered.");

    $('.status').text('Hey, who turned off the lights?');

  });

});
