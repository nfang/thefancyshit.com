/** @license MIT License (c) copyright 2013 Guozhen Nathan Fang */

/**
 * slider.js
 *
 * Simple and styleless jQuery slider plugin
 *
 * @author Guozhen Nathan Fang <nyyrikkifang@gmail.com>
 */

define([ "jquery" ], function ($) {

  "use strict";

  var Slider = function (el, options) {
    var defaults = {
      duration : 300,
      interval : 5000,
      autoPlay : false
    };

    this.$el = $(el);
    this.items = this.$el.children('.item');
    this.items.eq(0).addClass('active');

    this.options = $.extend(defaults, options || {});

    if (this.options.prevTrigger) {
      $(this.options.prevTrigger).on('click', $.proxy(this.prev, this));
    }

    if (this.options.nextTrigger) {
      $(this.options.nextTrigger).on('click', $.proxy(this.next, this));
    }

    if (this.options.autoPlay) {
      setInterval($.proxy(this.rotate, this), this.options.interval);
    }
  }

  Slider.prototype = {
    
    constructor: Slider,

    rotate: function () {
      var activeItem  = this.items.filter('.active')
        
        , nextItem    = activeItem.next().length ? 
            activeItem.next() : this.items.eq(0)
        
        , startOffset = parseFloat(this.$el.css('left'))

        , endOffset   = activeItem.index() < this.items.length - 1 ? 
            startOffset - (activeItem.width() + nextItem.width()) / 2 :
            0;

      this.$el.animate({ 'left': endOffset }, this.options.duration);
      this.items.removeClass('active');
      nextItem.addClass('active');
    },

    prev: function () {
      var activeItem = this.items.filter('.active')
        , prevItem   = activeItem.prev()
        , offset     = parseFloat(this.$el.css('left'));

      if (activeItem.index() > 0) {
        this.$el.animate({ 
          'left': offset + (activeItem.width() + prevItem.width()) / 2
        }, this.options.duration);

        this.items.removeClass('active');
        prevItem.addClass('active');
      }
    },

    next: function () {
      var activeItem = this.items.filter('.active')
        , nextItem   = activeItem.next()
        , offset     = parseFloat(this.$el.css('left'));

      if (activeItem.index() < this.items.length - 1) {
        this.$el.animate({ 
          'left': offset - (activeItem.width() + nextItem.width()) / 2
        }, this.options.duration);

        this.items.removeClass('active');
        nextItem.addClass('active');
      }
    }
  }

  $.fn.slider = function (options) {
    return new Slider(this, options);
  }
});