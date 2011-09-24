<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="en" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>H2V Guardians</title>
    <meta http-equiv="Content-Type" content="text/html; charset=us-ascii" />
    <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
    <link media="screen" type="text/css" rel="stylesheet" href="style.css" />
 
    <script type="text/javascript" src="Style/jquery-1.3.2.min.js"></script>
	<script type="text/javascript" src="Style/jquery-css-transform.js"></script>
	<script type="text/javascript" src="Style/rotate3di-0.9.js"></script>
	<script type="text/javascript" language="javascript" charset="utf-8">
$(document).ready(function () {
    $('#nav-list-example li div.back').hide().css('left', 0);
    
    function mySideChange(front) {
        if (front) {
            $(this).parent().find('div.front').show();
            $(this).parent().find('div.back').hide();
            
        } else {
            $(this).parent().find('div.front').hide();
            $(this).parent().find('div.back').show();
        }
    }
    
    $('#nav-list-example li').hover(
        function () {
            $(this).find('div').stop().rotate3Di('flip', 250, {direction: 'clockwise', sideChange: mySideChange});
        },
        function () {
            $(this).find('div').stop().rotate3Di('unflip', 500, {sideChange: mySideChange});
        }
    );
});
</script>
<!--Below are the inbedded styles required for the list sizes and current page-->
<style type="text/css" media="screen">
<!-- The P style keeps the back images align the #nav styles are for the front and the back images sets the sizes and positioning and alignment of the list -->
 	<!--li removes the bullet points-->
p{
 text-decoration:none;
  border: 0px;
  margin: 0px;
  padding: 0px;
  font-size: 10px;
  font-family: "Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif;
  font-weight: normal;
  text-align: right;	
}

#nav-list-example {
    height: 200px;
    width: 750px;
    margin: 10px;
}

#nav-list-example li {
    width: 160px;
    height: 200px;
    float: left;
    margin-right: 10px;
    position: relative;
}

#nav-list-example li div {
    width: 160px;
    height: 200px;
    overflow: hidden;
    background: white;
    position: absolute;
    top: 0px;
    left: 0px;
}

#nav-list-example li div.back {
    left: -999em;
    background: #999;
}
li{
	list-style:none;
}
</style>

    <?php
	function OutputBannerHeader()
	{
		$filename = ("header.jpg");
		$newh = ("<div id=\"containern\" style=\"background: #EFF3F6 url(h2v/" . $filename . ") no-repeat;\">\n");
		echo ($newh);
	}
	
	?>
</head>

<body>

          <div id="fullContainer">
        
            <?php OutputBannerHeader() ?>
            
                <div id="pageHeader"><img alt="" src="h2v/text.png" /></div>
                
                <div id="header"><a href="index.php">Home</a> | <a href="/forum/">Forums</a> | <a href="/forum/viewforum.php?f=14">News</a> | <a href="moose_corner.php">Moose's Corner</a> | <a href="player_stats.php">Player Stats</a> | <a href="view_servers.php">Server Viewer</a> | <a href="teamspeak.php">Teamspeak</a> | <a href="links.php">Links</a> </div>
                
                <div id="containerInside">
                <br />
                <!--List of all the guardians broken into 4 sets of four (empty spaces below are for any new members)-->
				<ul id="nav-list-example">
    			<li>
        		<div class="front"><a href="#"><img src="h2v/cards/squirrely.jpg" /></a></div>
        		<div class="back"><a href="#"><img src="h2v/cards/bio_squirrely.jpg" /></a></div>
    			</li>
    			<li>
        		<div class="front"><a href="#"><img src="h2v/cards/monstr.jpg" /></div></a>
        		<div class="back"><a href="#"><img src="h2v/cards/bio_monstr.jpg" /></a></div>
    			</li>
    			<li>
       			 <div class="front"><a href="#"><img src="h2v/cards/scorch.jpg"/></div></a>
       			 <div class="back"><a href="#"><img src="h2v/cards/bio_scorch.jpg" /></a></div>
    			</li>
    			<li>
        		<div class="front"><a href="#"><img src="h2v/cards/Oregg7.jpg" /></div></a>
        		<div class="back"><a href="#"><img src="h2v/cards/bio_Oregg7.jpg" /></a></div>
   				</li>
				</ul>
				<ul id="nav-list-example">
    			<li>
        		<div class="front"><a href="#"><img src="h2v/cards/beast.jpg" /> /></a></div>
        		<div class="back"><a href="#"><img src="h2v/cards/bio_beast.jpg" /></a></div>
    			</li>
    			<li>
        		<div class="front"><a href="#"><img src="h2v/cards/salmon.jpg" /></div></a>
        		<div class="back"><a href="#"><img src="h2v/cards/bio_salmon.jpg" /></a></div>
    			</li>
    			<li>
       			<div class="front"><a href="#"><img src="h2v/cards/aries.jpg" /></div></a>
        		<div class="back"><a href="#"><img src="h2v/cards/bio_aries.jpg" /></a></div>
    			</li>
    			<li>
        		<div class="front"><a href="#"><img src="h2v/cards/stingray.jpg" /></div></a>
       			<div class="back"><a href="#"><img src="h2v/cards/bio_stingray.jpg" /></a></div>
    			</li>
				</ul>
				<ul id="nav-list-example">
   				<li>
        		<div class="front"><a href="#"><img src="h2v/cards/bobbt.jpg" /></a></div>
       	 		<div class="back"><a href="#"><img src="h2v/cards/bio_bobbt.jpg" /></a></div>
    			</li>
    			<li>
        		<div class="front"><a href="#"><img src="h2v/cards/kael.jpg" /></div></a>
        		<div class="back"><a href="#"><img src="h2v/cards/bio_kael.jpg" />.</a></div>
    			</li>
    			<li>
       			<div class="front"><a href="#"><img src="h2v/cards/diablovixen.jpg" /></div></a>
       			<div class="back"><a href="#"><img src="h2v/cards/bio_diablovixen.jpg" /></a></div>
    			</li>
    			<li>
        		<div class="front"><a href="#"><img src="h2v/cards/fish.jpg" /></div></a>
        		<div class="back"><a href="#"><img src="h2v/cards/bio_fish.jpg" /></a></div>
    			</li>
				</ul>
				</ul>
				<ul id="nav-list-example">
    			<li>
       			<div class="front"><a href="#"><img src="h2v/cards/guardian.jpg" /></a></div>
        		<div class="back"><a href="#"><img src="h2v/cards/bio_guardian.jpg" /></a></div>
    			</li>
                
                <!-- Below are empty slots (3 slots total) in order to adjust this you just need to change "name.jpg" and bio_name.jpg and upload two new player cards-->
             
    			<!-- <li>
        		<div class="front"><a href="#"><img src="h2v/cards/name.jpg" /></div>
        		<div class="back"><a href="#"><img src="h2v/cards/bio_name.jpg" /></a></div>
    			</li>
    			<li>
        		<div class="front"><a href="#"><img src="h2v/cards/name.jpg" /></div>
        		<div class="back"><a href="#"><img src="h2v/cards/bio_name.jpg" /></a></div>
    			</li>
    			<li>
        		<div class="front"><a href="#">"h2v/cards/name.jpg"</div>
        		<div class="back"><a href="#"><img src="h2v/cards/bio_name.jpg" /></a></div>
    			</li>-->
				</ul>
                    </div>

                    <div id="footer">Copyright 2008-2009 @ http://www.monstrmoose.com</div>
                </div>
            </div>
        </div>
</body>
</html>