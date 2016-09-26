$(document).ready(function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

      var height = $(document).height()
      var width = $(document).width()
      var picWidth = Math.floor(width/2)
      var picHeight = Math.floor(picWidth * 1.6)
      var marginLeft = Math.floor((width - picWidth)/2);
      $("<img src='pics/dan.jpg' id='mobile'></div>").insertAfter("#after")
      $("#mobile").width(picWidth)
      $("#mobile").height(picHeight)
      //alert(picHeight)
      var marginTop = Math.floor((height - picHeight)/2)

      $("#mobile").css('margin-left', marginLeft + "px");
      $("#mobile").css('margin-top', marginTop + "px");

      function animate() {
          $('body').animate({backgroundColor:'#7ec0ee'}, 500, function(){
              $('body').animate({backgroundColor:'#ee7ec0'}, 500, function(){
                  $('body').animate({backgroundColor:'#c0ee7e'}, 500, function(){
                    console.log("animate");
                      animate();
                  });
              });
          });
      }

      function bass() {
        $("#mobile").animate({width: width + "px", marginLeft: marginLeft - width/4}, 565, function () {
          $("#mobile").animate({width: picWidth + "px", marginLeft: marginLeft}, 565, function () {
            bass();
          })
        })
      };


      animate();
      bass()

      //audio
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'repost.mp3');
      audioElement.setAttribute('autoplay', 'autoplay');
      //audioElement.load()
      $.get();
      audioElement.pause();
      $('*').click(function() {
          audioElement.play();
      });

  } else {

  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'repost.mp3');
  audioElement.setAttribute('autoplay', 'autoplay');
  //audioElement.load()
  $.get();
  audioElement.play();

  var body = document.body;
  var html = document.documentElement;
  var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  var width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );
  var ratio = width/10;
  var heightRatio = (ratio*(400/300));

  function scalableDan() {

     body = document.body;
     html = document.documentElement;
     height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
     width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );
     ratio = width/10;
     heightRatio = (ratio*(400/300));
    $(".dan").width(Math.floor(ratio))
    $(".dan").height(Math.floor(heightRatio))
    $(".dan").css("background-size", ratio + "px" + ' ' + (heightRatio) + "px" );
  }


  function amountDan() {
    var divDan = "<div class='dan'></div>"
    var divCon = "<div id="+ i +">"+ divDan + divDan + divDan + divDan + divDan + divDan + divDan + divDan + divDan + divDan +"</div>"
    for (var i = 0; i < (height/heightRatio ); i++) {
      $(divCon).insertAfter("#after")
    }
  }

  amountDan()
  scalableDan()

  /*
  $(document).click(function(){
    alert("width ratio: " + ratio)
  })
  */
  $( window ).resize(function() {
    scalableDan()
  });


  function animate() {
      $('body').animate({backgroundColor:'#7ec0ee'}, 500, function(){
          $('body').animate({backgroundColor:'#ee7ec0'}, 500, function(){
              $('body').animate({backgroundColor:'#c0ee7e'}, 500, function(){
                console.log("animate");
                  animate();
              });
          });
      });
  }
  animate();



  //$("*").css('background-color', "red");
} // end of else statement
});


//setInterval
