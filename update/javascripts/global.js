(function() {
  var clearModal;

  // list of work items done
  // would be nice to have this 
  // one some sort of noSql solution
  var workListItems = {
      items: [
      {
        name: 'KnicksNow',
        link: 'http://knicksnow.com',
        description: 'Some development work and maintenance on the blog website for the professional NBA team, the New York Knicks.',
        images: [
          './knicksnow/1.png'
        ],
        tags: [
          'web',
          'ruby',
          'rails',
          'javascript',
          'CSS',
          'HTML'
        ],
        layout: 'landscape'
      }, 
      {
        name: 'BlueShirtsUnited',
        link: 'http://blueshirtsunited.com',
        description: 'Helped develop a website for the professional NHL, the New York Rangers.',
        images: [
          './blueshirtsunited/1.png'
        ],
        tags: [
          'web',
          'ruby',
          'javascript',
          'CSS',
          'HTML',
          'rails'
        ],
        layout: 'portrait'
      },
      {
        name: 'Member.ly',
        link: 'http://member.ly',
        description: 'Memberly was a new platform that allowed small businesses to manage their own subscription services. It provided a landing page for the business and a backend management program.',
        images: [
          './memberly/1.png',
          './memberly/2.png',
          './memberly/3.png'
        ],
        tags: [
          'web',
          'ruby',
          'HTML',
          'CSS'
        ],
        layout: 'portrait'
      },
      {
        name: 'Playlist Creator',
        download: './demos/PlaylistCreator.zip',
        description: 'This was a personal programming project using C# and Microsoft Visual Studio. It was a UI created for Server Adminstration to generate game lists for their servers.',
        tags: [
          'app',
          'C#',
          'design'
        ],
        images: [
          './playlistcreator/1.png',
          './playlistcreator/2.png',
          './playlistcreator/3.png'
        ],
        layout: 'square'
      },      
      {
        name: 'Attack',
        description: 'A simple game built off of javascript and canvas. click add ball to get started',
        images: [
          './attack/1.png'
        ],
        tags: [
          'web',
          'javascript',
          'HTML',
          'CSS',
          'd3.js'
        ],
        link: 'https://paigeponzeka.github.io/Attack',
        layout: 'square'
      },
      {
        name: 'Stats2v',
        link: 'http://www.stats2v.ponzeka.com/rankings.php',
        description: 'Stats2V was a play stats platform developed for an online game. It pulled data directly from game servers and generated player data visualizations and comparisons.',
        images: [
          './stats2v/1.png',
          './stats2v/2.png',
          './stats2v/3.png',
          './stats2v/4.png',
          './stats2v/5.png',
          './stats2v/6.png',
          './stats2v/7.png'
        ],
        tags: [
          'web',
          'php',
          'HTML',
          'CSS',
          'data',
          'design'
        ],
        layout: 'portrait'
      },
      {
        name: 'VSU Victim Database',
        description: 'Database created for the Brooklyn\'s DA office to help file data for Quartly and monthly statstical requirements',
        tags: [
          'app',
          'access',
          'design',
          'lead',
          'volunteer'
        ],
        images: [
          './vsu/1.png',
          './vsu/2.png'
        ],
        layout: 'landscape'
      },
      {
        name: 'Museum of Modern Art',
        description: 'Advised New York City\'s Museum of Modern Art on the best ways to store and document technical art pieces.',
        tags: [
          'research'
        ],
        images: [
          './moma/1.jpg'
        ],
        layout: 'landscape'
      },
      {
        name: 'Game Attendance',
        description: 'A completely javascript based game attendance tracker used to track player attendance for softball games.',
        tags: [
          'web',
          'javascript',
          'HTML',
          'CSS',
          'parse',
          'nosql'
        ],
        link: 'http://paigeponzeka.github.io/GameAttendance/game.html',
        github: 'https://github.com/PaigePonzeka/GameAttendance',
        images: [
          './gameattendance/1.png',
          './gameattendance/2.png',
          './gameattendance/3.png'
        ],
        layout: 'portrait'
      },
      {
        name: 'BASL Manager',
        description: 'BASL Manager is an application created for a not-for-profit softball league to help with player ratings management.',
        link: 'https://basl-manager.herokuapp.com/',
        images: [
          './baslmanager/1.png',
          './baslmanager/2.png',
          './baslmanager/3.png',
          './baslmanager/4.png',
          './baslmanager/5.png'
        ],
        tags: [
          'web',
          'ruby',
          'rails',
          'HTML',
          'CSS',
          'bootstrap'
        ],
        layout: 'portrait'
      },
      {
        name: 'Group Commerce Admin',
        description: 'Lead front-end Engineer for the development of an admin CMS project..',
        images: [
          './groupcommerce/1.png',
          './groupcommerce/2.png',
          './groupcommerce/3.png',
          './groupcommerce/4.png',
          './groupcommerce/5.png',
          './groupcommerce/6.png',
          './groupcommerce/7.png',
          './groupcommerce/8.png'
        ],
        tags: [
          'web',
          'HTML',
          'CSS',
          '.net',
          'javascript',
          'bootstrap'
        ],
        layout: 'portrait'
      },
      {
        name: 'Big Apple Softball League',
        description: 'Redeveloped league website, created responsive newsletter template for mailchimp and managed graphics and ads.',
        link: 'http://www.bigapplesoftball.com/',
        images: [
          './basl/1.png',
          './basl/2.png',
          './basl/3.png',
          './basl/4.png',
          './basl/5.png'
        ],
        tags: [
          'web',
          'wordpress',
          'HTML',
          'CSS'
        ],
        layout: 'portrait'
      }


  ]};

  var WorkList = function() {
    var source = $('#work-item-template').html();
    this.template = Handlebars.compile(source);
    this.init();
  };

  /**
   * Create the Worklist items
   * from the handlebars template
   */
  WorkList.prototype.init = function() {
    var html = this.template(workListItems);
    $('.js-workitems-container').html(html);
  };

  var worklist = new WorkList();
  
  $(document).ready(function() {
    var item_width, left_value, speed;
    speed = 500;
    item_width = $('#modal_slides li').outerWidth();
    left_value = item_width * (-1);
    $("ul.nav a").bind("click", function(event) {
      var $anchor;
      $anchor = $(this);
      $("html, body").stop().animate({
        scrollTop: $($anchor.attr("href")).offset().top
      }, 3000, "easeInOutExpo");
      return event.preventDefault();
    });
  });
  clearModal = function() {
    return $("#modal_slides ul").html("");
  };

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
    } , 3000);
  };

  Carousel.prototype.stop = function() {
    window.clearInterval(window.carouselTimeout);
  };

  window.Carousel = Carousel;

}).call(this);
