
$(document).ready(function(){

  App.controller('home', function (page) {

    //on click on the take picture button, execute this function
    $(page).find('#takepic').on('click', function(){
      //locate the <img> element
      var imgHolder = $(page).find('#imgHolder');
      //create a new <p> element
      var imgDesc = $('<p></p>');

      //make a call to the cordova-plugin-camera
      navigator.camera.getPicture(
        function(imgData){
          //success, picture has been taken. update <img> with the url to the image
          imgHolder.attr('src', imgData);

          imgDesc.text('The Image Can be Found Here: ' + imgData);
          imgHolder.after(imgDesc);
        }, 
        function(err){
          //Error. Alert the Error.
          alert(JSON.stringify(err));
        }, 
        {}
      );

    });

  });


  try {
    App.restore();
  } catch (err) {
    App.load('home');
  } 

});