define([ "jquery", "lib/slider" ], function ($) {
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