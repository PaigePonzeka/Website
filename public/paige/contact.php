<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Paige Ponzeka > Contact</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<?php require_once("header.php");?>
<script type="text/javascript">
var revert = new Array();
var inames = new Array('submit','reset');

// Preload
if (document.images) {
  var flipped = new Array();
  for(i=0; i< inames.length; i++) {
    flipped[i] = new Image();
    flipped[i].src = "images/"+inames[i]+"2.png";
  }
}

function over(num) {
	//alert("TEST");
  if(document.images) {
    revert[num] = document.images[inames[num]].src;
    document.images[inames[num]].src = flipped[num].src;
  }
}
function out(num) {
  if(document.images) document.images[inames[num]].src = revert[num];
}
</script>

</head>

<body>
<div id="content" class="myBox">
	<div id="container">
		<div id="changingHeader">
			<div id="pageHeader"><img src="images/logo.png" alt=""/></div>
		</div>
		<!--Navigation Bar Start--> <?php require_once("nav.php");?> <!-- Navigation Bar end -->
	
  
	<!-- Main Text Starts Here-->
    	<!-- Welcome Title -->
    <h2><span style="font-weight:bold;">Contact Me</span></h2>
        <!-- Body of Text -->
    		<blockquote>Have any Questions, Concerns or Comment? Feel Free to Contact Me and Don't Forget to Leave Your Email or I Can't Get Back to You.</blockquote>
			<h2 style="color:#F00; font-size:24px; text-align:center;"> Under Construction </h2>
            <!--<form action="sendContact.php" method="get">
                  <table width="456" border="0" cellpadding="0" cellspacing="0" bgcolor="F7F5F2">
                    <tr>
                      <td height="60"></td>
                    </tr>
                    <tr>
                      <td height="28" valign="top"><table width="456" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td width="124" align="right" class="text_1">Your name:</td>
                          <td width="26"><img src="images/spacer.gif" width="1" height="1"></td>
                          <td><input name="your_name" type="text" class="form_1"></td>
                        </tr>
                      </table></td>
                    </tr>
                    <tr>
                      <td height="28" valign="top"><table width="456" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td width="124" align="right" class="text_1">E-mail address:</td>
                          <td width="26"><img src="images/spacer.gif" width="1" height="1"></td>
                          <td><input name="your_email" type="text" class="form_1"></td>
                        </tr>
                      </table></td>
                    </tr>
                    <tr>
                      <td height="91" valign="top"><table width="456" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td width="124" align="right" valign="top" class="text_1" style="padding-top:3px ">Message:</td>
                          <td width="26"><img src="images/spacer.gif" width="1" height="1"></td>
                          <td><textarea name="message" class="form_2"></textarea></td>
                        </tr>
                      </table></td>
                    </tr>
                    <tr>
                      <td valign="top"><center><img src="images/submit.png" name="submit" onClick="submit();" name="" onMouseOver="over(0)" onMouseOut="out(0)" onMouseOut="out(0)"/>
                      <img src="images/reset.png" name="reset" onMouseOver="over(1)" onClick="reset(); return false;" name="" onMouseOver="over(1)" onMouseOut="out(1)"/></center>
                     
                       </td>
                    </tr>
                  </table>
					</form>-->
         <!--End Body of Text -->
   	<!-- Footer--><?php require_once("footer.php");?><!-- End of Footer-->
	</div><!--End of Container-->  
</div><!--End of Content-->

    
	</body>
</html>