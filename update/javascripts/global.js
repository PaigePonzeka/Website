(function() {
  // creates the navigation slow
  $(".js-navigation").bind("click", function(event) {
    var $anchor;
    $anchor = $(this);
    $("html, body").stop().animate({
      scrollTop: $($anchor.attr("href")).offset().top
    }, 3000, "easeInOutExpo");
    return event.preventDefault();
  });

  /**
   * Class that handles the scrolling of the images in the work tiles
   * @param {jQueryObject} $container Selected container that contains the correct html structure
   */
  var Carousel = function($container) {

    if (!$container) {
      return;
    }

    var itemSelector = '.js-carousel-list-item';
    var listSelector = '.js-carousel-list';
    this.$list = $container.find(listSelector);
    var items = this.$list.find(itemSelector);

    if (!items) {
      return;
    }

    this.itemsWidth = items.first().outerWidth();
    this.itemsCount = items.length;

    if (this.itemsCount <= 1) {
      return;
    }

    this.maxMargin = (this.itemsCount - 1) * this.itemsWidth;
  };

  Carousel.prototype.start = function() {
    var self = this;
    this.count = 1;

    window.carouselTimeout = window.setInterval( function() {
      
      self.marginLeft = self.count * self.itemsWidth;
      self.$list.css('margin-left', - self.marginLeft);
      self.count++;

      if (self.marginLeft >= self.maxMargin) {
        self.count = 0;
      }
    }, 2000);
  };

  Carousel.prototype.stop = function(){
    window.clearInterval(window.carouselTimeout);
  };

  window.Carousel = Carousel;

  var workTiles = new WorkTiles();

}).call(this);
