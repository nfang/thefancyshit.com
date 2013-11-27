(function ($) {
  
  "use strict";

  var Slider = function (el, options) {
    this.$el = $(el);
    this.items = this.$el.children('.item');
    this.items.eq(0).addClass('active');

    if (options && options.prevTrigger) {
      $(options.prevTrigger).on('click', $.proxy(this.prev, this));
    }

    if (options && options.nextTrigger) {
      $(options.nextTrigger).on('click', $.proxy(this.next, this));
    }
  }

  Slider.prototype = {
    prev: function () {
      var activeItem = this.items.filter('.active')
        , prevItem = activeItem.prev()
        , offset = parseFloat(this.$el.css('left'));

      if (activeItem.index() > 0) {
        this.$el.animate({ 'left': offset + (activeItem.width() + prevItem.width()) / 2 }, 300);
        this.items.removeClass('active');
        prevItem.addClass('active');
      }
    },

    next: function () {
      var activeItem = this.items.filter('.active')
        , nextItem = activeItem.next()
        , offset = parseFloat(this.$el.css('left'));

      if (activeItem.index() < this.items.length - 1) {
        this.$el.animate({ 'left': offset - (activeItem.width() + nextItem.width()) / 2 }, 300);
        this.items.removeClass('active');
        nextItem.addClass('active');
      }
    }
  }

  $.fn.slider = function (options) {
    return new Slider(this, options);
  }
} (jQuery));