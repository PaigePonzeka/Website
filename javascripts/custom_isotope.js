	
    var $container = $('#container');

    $('#filters').find('a').click(function(){
      // get href attribute, minus the #, plus a . to make it a class
      var filterName = '.' + $(this).attr('href').slice(1);
      
      filterName = filterName === '.show-all' ? '*' : filterName;
      $container.isotope({ filter: filterName })
      return false;
    });

      
       // My own sorting function
      $('#sort a').click(function(){
        // get href attribute, minus the #
        var $this = $(this),
            sortName = $this.attr('href').slice(1),
            asc = $this.hasClass('asc');
        if(asc) 
        {
        	//the current div is set to desc
        	//call desc on the isotope
        	$this.removeClass('asc');
        	$this.addClass('desc');
        	 $container.isotope({ 
          	sortBy : sortName,
          	sortAscending : false
        	});
        }
        else
        {
        	//set current div to asc
        	$this.removeClass('desc');
        	$this.addClass('asc');
        	
        	//call desc on current div
	 		$container.isotope({ 
          	sortBy : sortName,
          	sortAscending : true
        	});
        }
        
       
        return false;
      });

    // change size of clicked element
    $container.find('.element').live('click', function(){
      $(this).toggleClass('large');
      //get the class of the clicked element
      var myClass = $(this).attr("class");
  	  //check to see if class contains the string large
  	  if(myClass.indexOf("large") == -1) //meaning the string does not exist
  	  	{
  	  		
  	  	}
  	  	else
  	  	{
  	  		//if it does show the description
  	  	  $(this).css("display", "block");
  	  	}
  	  	
      //custom code to show the description of the element
      
      $container.isotope('reLayout');
    });

    // toggle variable sizes of all elements
    $('#toggle-sizes').find('a').click(function(){
      $container
        .toggleClass('variable-sizes')
        .isotope('reLayout');
      return false;
    });

    
      // change layout
      var isHorizontal = false;
      $('#layouts a').click(function(){
        var mode = $(this).attr('href').slice(1);
            wasHorizontal = isHorizontal;
        isHorizontal = $(this).hasClass('horizontal');
  
        if ( wasHorizontal !== isHorizontal ) {
          // need to do some clean up for transitions and sizes
          var style = isHorizontal ? 
            { height: '80%', width: $container.width() } : 
            { width: 'auto' };
          // stop any animation on container height / width
          $container.filter(':animated').stop();

          $container.addClass('no-transition').css( style );
          setTimeout(function(){
            $container.removeClass('no-transition').isotope({ layoutMode : mode });
          }, 100 )
        } else {
          // go ahead and apply new layout
          $container.isotope({ layoutMode : mode });
    
        }
  
        return false;
      });

          $('#insert a').click(function(){
        var i = Math.ceil( Math.random()*3 + 1 ),
            newEls = '';
        while ( i-- ) {
          newEls += fakeElement.create();
        }
        var $newEls = $( newEls )
        $container.isotope( 'insert', $newEls );

        return false;
      });

      $('#append a').click(function(){
        var i = Math.ceil( Math.random()*3 + 1 ),
            newEls = '';
        while ( i-- ) {
          newEls += fakeElement.create();
        }
        var $newEls = $( newEls )
        $container.append( $newEls ).isotope( 'appended', $newEls );

        return false;
      });

    $('#shuffle a').click(function(){
      $container.isotope('shuffle');
      return false;
    });

    
      // switches selected class on buttons
      $('#options').find('.option-set a').click(function(){
        var $this = $(this);

        // don't proceed if already selected
        if ( !$this.hasClass('selected') ) {
          $this.parents('.option-set').find('.selected').removeClass('selected');
          $this.addClass('selected');
        }

      });
	
    $(function(){

      // hacky way of adding random size classes
      $container.find('.element').each(function(){
        if ( Math.random() > 0.6 ) {
          $(this).addClass('width2');
        }
        if ( Math.random() > 0.6 ) {
          $(this).addClass('height2');
        }
      });


      $container.isotope({
        itemSelector : '.element',
        // layoutMode : 'fitRows',
        masonry : {
          columnWidth : 120
        },
        masonryHorizontal : {
          rowHeight: 120
        },
        cellsByRow : {
          columnWidth : 240,
          rowHeight : 240
        },
        cellsByColumn : {
          columnWidth : 240,
          rowHeight : 240
        },
        animationEngine : $.browser.opera ? 'jquery' : 'best-available',
        // animationEngine : 'jquery',
        getSortData : {
          symbol : function( $elem ) {
            return $elem.attr('data-symbol');
          },
          category : function( $elem ) {
            return $elem.attr('data-category');
          },
          number : function( $elem ) {
            return parseInt( $elem.find('.number').text(), 10 );
          },
          weight : function( $elem ) {
            return parseFloat( $elem.find('.weight').text().replace( /[\(\)]/g, '') );
          },
          name : function ( $elem ) {
            return $elem.find('.name').text();
          }
        }
      });


    });