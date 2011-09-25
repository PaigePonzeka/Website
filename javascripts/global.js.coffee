$(document).ready ->
  speed = 500

  item_width = $('#modal_slides li').outerWidth()
  left_value = item_width * (-1)

  # Attach the binds for the isotope
  $("ul.nav a").bind "click", (event) ->
    $anchor = $(this)
    $("html, body").stop().animate scrollTop: $($anchor.attr("href")).offset().top, 3000, "easeInOutExpo"
    event.preventDefault()

  #move the last item before first item, just in case user click prev button
  $('#modal_slides li:first').before($('#modal_slides li:last'))

  # set the default item to the correct position
  $('#modal_slides ul').css({'left' : left_value})

  $("#modal_buttons_previous").click ->
    left_indent = parseInt($("#modal_slides ul").css("left")) + item_width
    $("#modal_slides ul").animate left: left_indent, 200, ->
      $("#modal_slides li:first").before $("#modal_slides li:last")
      $("#modal_slides ul").css left: left_value

    false

  $("#modal_buttons_next").click ->
    left_indent = parseInt($("#modal_slides ul").css("left")) - item_width
    $("#modal_slides ul").animate left: left_indent, 200, ->
      $("#modal_slides li:last").after $("#modal_slides li:first")
      $("#modal_slides ul").css left: left_value

    false
  $('#modal_close').click ->
    $('#modal').addClass('hide')
    $('#modal_curtain').addClass('hide')

  $('.view_modal').click ->
    images_folder = 'images/projects/'
    $('#modal').removeClass('hide')
    $('#modal_curtain').removeClass('hide')
    clearModal()
    # set title
    title = $(this).attr('data-title')
    title = title.replace(/\s/g, '_')
    console.log(title)
    $("#modal h2").html(title)
    slide_count = $(this).attr('data-slide_count')
    picture = ""
    for n in [1..slide_count]
      picture = ""
      slide_description = $(this).attr("data-#{n}_description")
      slide_title = $(this).attr("data-#{n}_title")

      slide_picture = "#{images_folder}#{title}/#{n}.png"
      # if slide picture is set just use the old one
      if(slide_picture)
        picture = slide_picture
      if (slide_description && slide_title)
        # add slide
        slide = $("#modal_templates li").clone()
        slide.find('h3').html(slide_title)
        slide.find('p').html(slide_description)
        slide.find('img').attr('src', slide_picture)
        slide.appendTo('#modal_slides ul')

# clears the modal and data
clearModal= ->
  $("#modal_slides ul").html("")




