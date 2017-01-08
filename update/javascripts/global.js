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
          'web'
        ]
      }, 
      {
        name: 'BlueShirtsUnited',
        link: 'http://blueshirtsunited.com',
        description: 'Helped develop a website for the professional NHL, the New York Rangers.',
        images: [
          './blueshirtsunited/1.png'
        ],
        tags: [
          'web'
        ]
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
          'web'
        ]
      },
      {
        name: 'Playlist Creator',
        download: './demos/PlaylistCreator.zip',
        description: 'This was a personal programming project using C# and Microsoft Visual Studio. It was a UI created for Server Adminstration to generate game lists for their servers.',
        tags: [
          'app'
        ],
        images: [
          './playlistcreator/1.png',
          './playlistcreator/2.png',
          './playlistcreator/3.png'
        ]
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
          'web'
        ]
      },
      {
        name: 'VSU Victim Database',
        description: 'Database created for the Brooklyn\'s DA office to help file data for Quartly and monthly statstical requirements',
        tags: [
          'app'
        ],
        images: [
          './vsu/1.png',
          './vsu/2.png'
        ]
      },
      {
        name: 'Museum of Modern Art',
        description: 'Advised New York City\'s Museum of Modern Art on the best ways to store and document technical art pieces.',
        tags: [
          'research'
        ],
        images: [
          './moma/1.jpg'
        ]
      },
      {
        name: 'Game Attendance',
        description: 'A completely javascript based game attendance tracker used to track player attendance for softball games.',
        tags: [
          'web'
        ],
        link: 'http://paigeponzeka.github.io/GameAttendance/game.html',
        github: 'https://github.com/PaigePonzeka/GameAttendance',
        images: [
          './gameattendance/1.png',
          './gameattendance/2.png',
          './gameattendance/3.png'
        ]
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
          'web'
        ]
      },
      {
        name: 'attack',
        description: 'A simple game built off of javascript and canvas. click add ball to get started',
        images: [
          './attack/1.png'
        ],
        tags: [
          'web'
        ],
        link: 'https://paigeponzeka.github.io/Attack'
      },
      {
        name: 'Group Commerce',
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
          'web'
        ]
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
          'web'
        ]
      }


  ]};

  var WorkList = function() {
    var source = $('#work-item-template').html();
    console.log(source);
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
    console.log(html);

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
    $('#modal_slides li:first').before($('#modal_slides li:last'));
    $('#modal_slides ul').css({
      'left': left_value
    });
    $("#modal_buttons_previous").click(function() {
      var left_indent;
      left_indent = parseInt($("#modal_slides ul").css("left")) + item_width;
      $("#modal_slides ul").animate({
        left: left_indent
      }, 200, function() {
        $("#modal_slides li:first").before($("#modal_slides li:last"));
        return $("#modal_slides ul").css({
          left: left_value
        });
      });
      return false;
    });
    $("#modal_buttons_next").click(function() {
      var left_indent;
      left_indent = parseInt($("#modal_slides ul").css("left")) - item_width;
      $("#modal_slides ul").animate({
        left: left_indent
      }, 200, function() {
        $("#modal_slides li:last").after($("#modal_slides li:first"));
        return $("#modal_slides ul").css({
          left: left_value
        });
      });
      return false;
    });
    $('#modal_close').click(function() {
      $('#modal').addClass('hide');
      return $('#modal_curtain').addClass('hide');
    });
    return $('.view_modal').click(function() {
      var images_folder, n, picture, slide, slide_count, slide_description, slide_picture, slide_title, title, _results;
      images_folder = 'images/projects/';
      $('#modal').removeClass('hide');
      $('#modal_curtain').removeClass('hide');
      clearModal();
      title = $(this).attr('data-title');
      title = title.replace(/\s/g, '_');
      console.log(title);
      $("#modal h2").html(title);
      slide_count = $(this).attr('data-slide_count');
      picture = "";
      _results = [];
      for (n = 1; 1 <= slide_count ? n <= slide_count : n >= slide_count; 1 <= slide_count ? n++ : n--) {
        picture = "";
        slide_description = $(this).attr("data-" + n + "_description");
        slide_title = $(this).attr("data-" + n + "_title");
        slide_picture = "" + images_folder + title + "/" + n + ".png";
        if (slide_picture) {
          picture = slide_picture;
        }
        _results.push(slide_description && slide_title ? (slide = $("#modal_templates li").clone(), slide.find('h3').html(slide_title), slide.find('p').html(slide_description), slide.find('img').attr('src', slide_picture), slide.appendTo('#modal_slides ul')) : void 0);
      }
      return _results;
    });
  });
  clearModal = function() {
    return $("#modal_slides ul").html("");
  };
}).call(this);
