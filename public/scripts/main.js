require.config({
  "baseUrl": "/scripts",
  "paths"  : {
    "jquery": "//code.jquery.com/jquery-1.10.2.min"
  }
});

require([ "jquery", "slider" ], function ($) {

  function rotateKV() {
    var kv = $("#kv")
      , numOfItems = $("#kv > li").length
      , startOffset = parseFloat(kv.css('left'))
      , endOffset = 0;

    if ((startOffset - 960) > -numOfItems * 960) {
      endOffset = startOffset - 960;
    }

    kv.animate({
      left: endOffset
    }, 1000);
  }

  $(function () {
    $("#carousel").slider({
        prevTrigger : '.slide-nav.prev',
        nextTrigger : '.slide-nav.next'
      });

    setInterval(function () { rotateKV() }, 8000);
  });
});