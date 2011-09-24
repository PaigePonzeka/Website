(function() {
  $(document).ready(function() {
    var item_width, left_value, speed;
    speed = 5000;
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
    $('.view_modal').click(function() {
      var images_folder, n, picture, slide, slide_count, slide_description, slide_picture, slide_title, title, _results;
      images_folder = 'images/projects/';
      $('#modal').removeClass('hide');
      $('#modal_curtain').removeClass('hide');
      title = $(this).attr('data-title');
      $("#modal h2").html(title);
      slide_count = $(this).attr('data-slide_count');
      picture = "";
      _results = [];
      for (n = 1; 1 <= slide_count ? n <= slide_count : n >= slide_count; 1 <= slide_count ? n++ : n--) {
        console.log(n);
        picture = "";
        slide_description = $(this).attr("data-" + n + "_description");
        slide_title = $(this).attr("data-" + n + "_title");
        slide_picture = "" + images_folder + title + "/" + n + ".png";
        if (slide_picture) {
          picture = slide_picture;
        }
        _results.push(slide_description && slide_title ? (slide = $("#modal_templates li").clone(), slide.find('h3').html(slide_title), slide.find('p').html(slide_description), slide.find('img').attr('src', slide_picture), slide.appendTo('#modal_slides ul'), console.log(slide)) : void 0);
      }
      return _results;
    });
    $('#modal_buttons_previous').click(function() {
      return console.log("previous");
    });
    return $('#modal_buttons_next').click(function() {
      return console.log('next');
    });
  });
}).call(this);
