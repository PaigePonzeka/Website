<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<?php
require("serverlist.php");
$numOfServers=count($serverlist);
for($i=0;$i<$numOfServers;$i+=1)
{
	echo "<a href=\"".$serverlist[$i].".php\">$serverlist[$i]</a> <br \>";
}
?>
</body>
</html>