/**
 * Code to render and intialize the Work Tiles
 */
(function() {
  var resizeTimer;

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
          'HTML',
          'project'
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
          'rails',
          'project'
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
          'CSS',
          'project'
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
          'design',
          'project'
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
          'd3.js',
          'project'
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
          'design',
          'project'
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
          'volunteer',
          'project'
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
          'research',
          'volunteer',
          'career'
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
          'nosql',
          'project'
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
          'bootstrap',
          'project',
          'volunteer'
        ],
        layout: 'landscape'
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
          'bootstrap',
          'project'
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
          'CSS',
          'volunteer'
        ],
        layout: 'portrait'
      },
      {
        name: 'New York University',
        description: 'While attending NYU, worked as Office technology adminstration assisting employees with tech-related issues',
        images: [
          './nyu/1.jpg'
        ],
        tags: [
          'career',
          'technology',
          'support',
          'student'
        ],
        layout: 'square'
      },
      {
        name: 'Disrupto',
        description: 'Worked as an intern turned full time employee for a consulting firm named Disrupto. Worked on projects for NY Rangers, NY Knicks, Samsung, and Memberly.',
        tags: [
          'career',
          'ruby',
          'rails',
          'design',
          'HTML',
          'CSS'
        ],
        images: [
          './disrupto/1.png'
        ],
        layout: 'square'
      },
      {
        name: 'Group Commerce',
        description: 'Worked on the implementation of websites and updating the platform service. Worked closely with a design and product team to re-implement the user interface of the company\'s CIMS system used by clients.',
        link: 'https://lgtm.github.io/D3Grid/',
        tags: [
          'career',
          '.net',
          'HTML',
          'CSS',
          'javascript'
        ],
        images: [
          './gc/1.jpg'
        ],
        layout: 'square'
      },
      {
        name: 'Yext',
        description: 'Worked on a Full-stack engineering team touching code in MySQL, Java along with maintaining, refactoring and updating Javascript, SASS & HTML code using Groovy & Soy Templates. Maintain complicated Javascript frameworks and systems using Plovr & Closure and countless libraries.',
        link: 'http://yext.com',
        tags: [
          'career',
          'HTML',
          'CSS',
          'javascript',
          'java',
          'closure'
        ],
        images: [
          './yext/1.png'
        ],
        layout: 'landscape'
      }, 
      {
        name: 'Geomarketing',
        description: 'Maintained and Implemented site',
        link: 'http://geomarketing.com',
        images: [
          './geomarketing/1.png'
        ],
        tags: [
          'wordpress',
          'php',
          'HTML',
          'CSS',
          'career'
        ],
        layout: 'square'
      }
  ]};

  var WorkTiles = function() {
    this.$container = $('.js-workitems-container');
    this.init();
  };

  WorkTiles.prototype.init = function() {
    this.render();
    this.initContainer();
    this.initIsotope();
    this.bindElementAction();
    this.bindFilters();

    var self = this;

    $(window).on('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        self.initContainer();
      }, 250);
    });
  };

  /**
   * Uses handlebars to render the tiles
   */
  WorkTiles.prototype.render = function() {
    var source = $('#work-item-template').html();
    this.template = Handlebars.compile(source);
    var html = this.template(workListItems);
    this.$container.html(html);
  };

  /**
   * Initialize the Isototype plugin on the element tiles
   */
  WorkTiles.prototype.initIsotope = function() {
    this.$container.isotope({
        itemSelector : '.element',
        masonry : {
          columnWidth : 50
        },
        animationEngine : 'jquery',
        getSortData : {
          symbol : function( elem ) {
            var $elem = $(elem);
            return $elem.data('symbol');
          },
          category : function( elem ) {
            var $elem = $(elem);
            return $elem.data('category');
          },
          number : function( elem ) {
            var $elem = $(elem);
            return parseInt( $elem.find('.number').text(), 10 );
          },
          weight : function( elem ) {
            var $elem = $(elem);
            return parseFloat( $elem.find('.weight').text().replace( /[\(\)]/g, '') );
          },
          name : function ( elem ) {
            var $elem = $(elem);
            return $elem.find('.name').text();
          }
        }
      });

      // randomize the display
      this.$container.isotope({ sortBy: 'random'});
  };

  /**
   * Sets the container to a set width to make sure display looks nice
   */
  WorkTiles.prototype.initContainer = function() {
    var containerWidth = $(window).width(),
        modValue = containerWidth % 200;

    if (modValue != 0) {
      // set the container width = containerWidth - modValue
      this.$container.width(containerWidth - modValue); 
    } else {
      this.$container.css('width', '100%');
    }
  };

  /**
   * Enlarge Image when it is clicked
   */
  WorkTiles.prototype.bindElementAction = function() {
    var self = this;
    this.$container.on('click', '.element', function() {
      var $this = $(this);
      var $carousel = $this.find('.js-carousel');

      var carousel = new window.Carousel($carousel);

      if ($this.hasClass('large')) {
        $this.removeClass('large');     
        self.$container.isotope('layout');
        carousel.stop();
        return;

      }
      self.$container.find('.element').removeClass('large');
      $this.addClass('large');
      if (carousel.itemsCount > 1) {
        carousel.start();
      }
      self.$container.isotope('layout');
    });
  };

  WorkTiles.prototype.bindFilters = function() {
    var self = this;

    $('#filters').find('a').click(function(){
      var $this = $(this);
      $('#filters a').removeClass('selected');
      // get href attribute, minus the #, plus a . to make it a class
      var filterName = '.' + $this.attr('href').slice(1);
      $this.addClass('selected');
      
      filterName = filterName === '.show-all' ? '*' : filterName;
      self.$container.isotope({ filter: filterName })
      return false;
    });

  };

  window.WorkTiles = WorkTiles;

}).call(this);