<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Paige Ponzeka > Samples > Server Viewer</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

<script type="text/javascript">
<!--
function HideFrame(element) {
  var fr = document.getElementById (element);
if(fr.style.display=="none") {
   fr.style.display="block";
}
else {
   fr.style.display="none";
  }
 }
//-->
</script>
</head>
<?php require_once("header.php");?>
<body>
<div id="content" class="myBox">
	<div id="container">
		<div id="changingHeader">
			<div id="pageHeader"><img src="images/logo.png" alt=""/></div>
		</div>
		<!--Navigation Bar Start--> <?php require_once("nav.php");?> <!-- Navigation Bar end -->
	
  
	<!-- Main Text Starts Here-->
    	<!-- Welcome Title -->
    <?php
echo "<center>";
//for each server in the server list generate a server viewer
require("samples/ServerViewer/i4Ni/i4niservers.php");
require("samples/ServerViewer/i4Ni/colors.php");
$numOfServers=count($i4niserverlist);
echo "<div id=\"servers\">";
echo "<div id=\"left\">";
$half=($numOfServers/2);
for($i=0;$i<$numOfServers;$i+=1)
{
	
	if($i==$half)
	{
		//close the left div
		echo "</div>";
		//open the right div
		echo "<div id=\"right\">";
	}
	//fill in the div information
	$myFile = "samples/ServerViewer/i4Ni/$i4niserverlist[$i].txt";
$fh = fopen($myFile, 'r');
$theData = fread($fh, filesize($myFile));
fclose($fh);
//echo $theData;
$tok = strtok($theData, "\n\t");
$numOfPlayers;
$map;
$variant;
//get game data, all text files will have at least this
//for($i=0; $i<3;$i++)
//{
	//echo "Game Data=$tok<br />";
	$map=$tok;
	
	  $tok = strtok("\n\t");
	  $variant=$tok;
	
	 $tok = strtok("\n\t");
	 $numOfPlayers=$tok;
	 echo "<div style=\"width:200px;
     line-height:30px;
     font-family: 'Droid Sans', arial, serif;
     font-size:12px;
     color:#666;
     text-align:center;
     background-color:#eee;
     border:3px double #666;
     cursor:pointer;\" onclick=\"HideFrame('$i4niserverlist[$i]')\">$i4niserverlist[$i]--- $numOfPlayers Players</div>";
	 //open the server div
	echo "<div style=\"display:none\" width=425px height=555px id=\"$i4niserverlist[$i]\">"; 
	 echo "<div id=\"server\"";
	//style=\"background:url('http://www.diablovixen.com/servers/aaah/images/".$tok.".jpg')\">";
	echo "<h1>$map</h1>";
	 echo "<center><pre><h3>$variant";
	echo "      $tok</h3></pre></center>";
	echo "<div id=\"players\">";
//}
 echo "<table>";
 $player;
 $score;
 $team;
  $tok=strtok("\n\t");
  $player=$tok;
//get all the players data
while ($tok !== false) {
	  // echo "<tr><td>$player</td>";
	    $tok=strtok("\n\t");
		$score=$tok;
	   //echo "<td>$score</td></tr>";
	   $tok=strtok("\n\t");
	   $team=$tok;
//$teamColors[$team]
//echo "<!-- Team= $team -->";
	   echo "<tr><td><p1 style=\"color:$teamColors[$team]\">$player</p1></td><td><p1 style=\"color:$teamColors[$team]\">$score</p1></td></tr></p>\n";
	   $tok=strtok("\n\t");
	   $player=$tok;
}
echo "</div>";
echo "</div>";
echo "</table>

</div><!--End of Players-->
</div><!-- End of Server-->";
echo "</div> \n";


	}
	
	echo "</div> \n";


echo "</center>";?>
         <!--End Body of Text -->
   	<!-- Footer--><?php require_once("footer.php");?><!-- End of Footer-->
	</div><!--End of Container-->  
</div><!--End of Content-->

    
	</body>
</html>