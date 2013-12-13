require.config({
  "baseUrl": "/scripts",
  "paths"  : {
    "jquery": "//code.jquery.com/jquery-1.10.2.min"
  }
});

require([ "jquery", "slider" ], function ($) {
  $(function () {
    $("#carousel").slider({
      prevTrigger : '.slide-nav.prev',
      nextTrigger : '.slide-nav.next'
    });

    $("#kv").slider({
      autoPlay : true,
      duration : 1000,
      interval : 8000
    });
  });
});