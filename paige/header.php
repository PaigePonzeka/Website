<?php /*Echo the header*/

echo '<link rel="shortcut icon" href="images/favico.ico">
<!--Style Sheets-->
<link href="style/style.css" rel="stylesheet" type="text/css" />
<!--Script-->
<script src="scripts/jquery-1.3.2.min.js" type="text/javascript"></script>
<script type="text/JavaScript" src="scripts/jquery.curvycorners.source.js"></script>
<script type="text/JavaScript" src="scripts/getCSS.js"></script>
<script src="scripts/hover.js" type="text/javascript"></script>
<script type="text/JavaScript">
  $(function(){ 
  settings = {
          tl: { radius: 20 },
          tr: { radius: 20 },
          bl: { radius: 20 },
          br: { radius: 20 },
          antiAlias: true,
          autoPad: true,
          validTags: ["div"]
      }
  $(".myBox").corner(settings);
  });;
</script>
<script language="javascript">getCSS();</script>
<!--[if lt IE 8]>
<style type="text/css" media="screen">
#menuh{float:none;}
body{behavior:url(csshover.htc); font-size:75%;}
#menuh ul li{float:left; width: 100%;}
#menuh a{height:1%;font:bold 1em/1.4em helvetica, arial, sans-serif;}
</style>
<![endif]-->';

?>