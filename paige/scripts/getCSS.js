<!-- Begin
function getCSS()
{
datetoday = new Date();
timenow=datetoday.getTime();
datetoday.setTime(timenow);
thehour = datetoday.getHours();

if (thehour > 20)
//twilight DONE
display = "style/twilight.css";
else if (thehour > 17)
//sunset DONE
display = "style/sunset.css";
else if (thehour > 14)
//afternoon DONE
display = "style/afternoon.css";
else if (thehour > 11)
//noon DONE
display = "style/noon.css";
else if (thehour > 7)
//morning
display = "style/morning.css";
else if (thehour > 4)
//sunrise DONE
display = "style/sunrise.css";
else if (thehour > 1)
//twilight DONE
display = "style/twilight.css";
else
//sunset DONE
display = "style/twilight.css";

var css = '<';  css+='link rel="stylesheet" href=' + display + ' \/';  css+='>';

document.write(css);
// End -->
}