require.config({
  "baseUrl": "/scripts",
  "paths"  : {
    "jquery": "//code.jquery.com/jquery-1.10.2.min"
  }
});

require([ "jquery", "slider" ], function ($) {
  var wViewPort = $(window).width();

  function rotateKV() {
    var kv = $("#kv")
      , numOfItems = $("#kv").find("li").length
      , startOffset = parseFloat(kv.css('left'))
      , endOffset = 0;

    if ((startOffset - 960) > -numOfItems * 960) {
      endOffset = startOffset - 960;
    }

    kv.animate({
      left: endOffset + 'px'
    }, 1000);
  }

  $(function () {
    init_offset = (wViewPort - 373) / 2;

    $("#carousel").css('left', init_offset)
      .slider({
        prevTrigger : '.slide-nav.prev',
        nextTrigger : '.slide-nav.next'
      });

    setInterval(function () { rotateKV() }, 8000);
  });
});