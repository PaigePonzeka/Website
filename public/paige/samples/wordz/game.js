soundManager.url = 'resources/'; // directory where SM2 .SWFs live
var sound = new Array(8);
var error;
var loopy;

soundManager.onload = function() {
 
  // SM2 is ready to go!
  sound[0] = soundManager.createSound({
    id: 'oneSound',
    url: 'sound/1.mp3',
    volume: 40
  });
   sound[1] = soundManager.createSound({
    id: 'twoSound',
    url: 'sound/2.mp3',
    volume: 40
  });
   sound[2] = soundManager.createSound({
    id: 'threeSound',
    url: 'sound/3.mp3',
    volume: 40
  });
   sound[3] = soundManager.createSound({
    id: 'fourSound',
    url: 'sound/4.mp3',
    volume: 40
  });
   sound[4] = soundManager.createSound({
    id: 'fiveSound',
    url: 'sound/5.mp3',
    volume: 40
  });
   sound[5] = soundManager.createSound({
    id: 'sixSound',
    url: 'sound/6.mp3',
    volume: 40
  });
   sound[6] = soundManager.createSound({
    id: 'sevenSound',
    url: 'sound/7.mp3',
    volume: 40
  });
   sound[7] = soundManager.createSound({
    id: 'eightSound',
    url: 'sound/8.mp3',
    volume: 40
  }); 
  
    error = soundManager.createSound({
    id: 'error',
    url: 'sound/error.mp3',
    volume: 60,
	pan: 100
  });
  
   	loopy = soundManager.createSound({
    id: 'loopy',
    url: 'sound/loopy.mp3',
    volume: 40
  });
  loopSound('loopy');
  
}

window.onload= startGame;
document.onkeydown = checkkey;
var score=0;
var typed="";
var wordTotal=0; //keeps track of the total amount of words being used
var x=80;
var y=0;
var word="";
var charLocation;
var startFontSize=24;
var size=25;//stores the array word size
var fourLetters;
var wordPostion;
var gameStart;
var numberColor;
var isPalindrome;
var flashing;
var missedWords=0;
var gameOver;
var wordSpeed=1;
var isTyped=false;
/*HTML ID VALUES
 * Where the score is displayed="score"
 * Where the Gameboard is(where letters fall)="gameboard"
 * Where the text the user types shows up="typed"
 * the falling text= "gametest"
 */

function loopSound(soundID) {
window.setTimeout(function() {soundManager.play(soundID,{onjustbeforefinish:function(){loopSound(soundID);}});},500);
}

function getBrowserWidth(){
    //gets the users browser with
    var width=(document.documentElement.clientWidth);
    return width;
}
function setWordDropLocations(){
    //creates an array of 10 different pixel locations that the word can drop
    var width=getBrowserWidth();
    var dropLocations= new Array(10);
    var center=width/2;
    dropLocations[0]=center;
    dropLocations[1]=center-50;
    dropLocations[2]=center-100;
    dropLocations[3]=center-150;
    dropLocations[4]=center-200;
    dropLocations[5]=center+25;
    dropLocations[6]=center+50;
    dropLocations[7]=center+10;
    dropLocations[8]=center+5;
    dropLocations[9]=center+75;
    return dropLocations;
}
function getDropLocationsArray(num){
    //takes a number and returns the given array value
    var dropLoc=setWordDropLocations();
    return dropLoc[num];
}
function randomDropLocation(){
    //uses createRandomVar to call a random pixel location from the wordDropLocations Array
    var randomNum=createRandomVar(10);
    //get the drop location
    var whereToDrop= getDropLocationsArray(randomNum);
    //set it to the gametext pixel location
    document.getElementById("gametext").style.left =whereToDrop+"px";
    //alert(whereToDrop);
}
function setCityArray(){
    //returns the cityArray
    var location="city/";
    var cityArray=new Array(10);
    cityArray[0]=location+"one.png";
    cityArray[1]=location+"two.png";
    cityArray[2]=location+"three.png";
    cityArray[3]=location+"four.png";
    cityArray[4]=location+"five.png";
    cityArray[5]=location+"six.png";
    return cityArray;
}
function getCityArray(){
    //takes the cityArray and randomy variable to get the array location
    var cityArray=setCityArray();
    var randomNum=createRandomVar(6);
    //alert(cityArray[randomNum]);
    var image=cityArray[randomNum];
    setBoardBackground("typed",image);
}
function createRandomVar(num){
    //creates a random var between 0 and num -1
    var randomNum= Math.floor(Math.random()*num);
    //returns the var
    return randomNum;
}
function startGame(){
    gameOver=false;
    gameStart=false;
	isTyped=false;
	wordSpeed=1;
    missedWords=0;
    //sets the title screen
     document.getElementById("gameboard").style.backgroundImage="url(titlescreen.gif)";
}
function doOnLoad()
//calls all functions that need to be done as soon as the system loads
{
   numberColor=0;
   randomDropLocation();
   setBoardBackground("gameboard","grain.gif");
   fourLetterWords();
   setString();//tests the getString method
   SlideText();
   setFont("gametext");
}
function setLeftAlignment(){
     document.getElementById("gametext").style.left ="400px";
}
function fourLetterWords(){
    //sets the fourLetterWord array for level 1
	AllWords="ABLE ACES ACHE ACHY ACID ACME ACNE ACRE ACTS ADDS AFRO AGED AGES AHEM AIDE AIDS AILS AIMS AIRS AJAR AKIN ALLY ALMA ALOE ALSO AMEN AMMO ANEW ANTS AQUA ARID ARMS ARMY ARTS ARTY ASHY ASKS ATOM ATOP AUNT AUTO AVID AWAY AWED AWES AWRY AXED AXEL AXES AXIS AXLE AXON AYAH AYES  BABE BABY BACK BADE BAGS BAIL BAIT BAKE BALD BALE BALK BALL BALM BAND BANE BANG BANK BANS BARE BARK BARS BASE BASH BASK BASS BAST BATE BATH BATS BAYS BEAD BEAK BEAM BEAN BEAR BEAT BEEF BEEN BEEP BEER BEES BEET BEGS BELL BELT BEND BENT BEST BETA BIAS BIDS BIKE BILE BILK BILL BING BINK BINS BIOS BIRD BIRK BITE BITS BLEW BLOW BLUE BLUR BOAT BODY BOIL BOND BONE BOOK BOOT BORE BORN BOSS BOTH BOWL BOWS BRAG BREW BUMP BUZZ BYTECAFE CAGE CAKE CALF CALL CALM CAME CAMP CAMS CANE CANS CARE CARS CART CASE CASH CASK CAST CAVE CEIL CELL CENT CHAT CHEF CHEW CHIN CHIP CHOP CITY CLAM CLAP CLAW CLAY CLIP CLUB CLUE COAL COAT COAX CODE COIL COIN COLD COMB COME CONE COOK COOL COPE COPS COPY CORD CORE CORK CORN CRAB CRAN CROP CROW CUPS CURB CURD CURE CUTE CUTS CYAN CZAR DAME DANG DANK DANS DARK DARN DART DASH DATA DATE DAWN DAYS DAZE DEAD DEAF DEAL DEAR DEBT DECK DEED DEEP DEER DEMO DENT DENY DESK DIGS DIME DINE DIRT DISC DISH DISK DIVA DOCK DOES DOFF DOGE DOGS DOME DONE DOOR DOVE DOWN DOZE DRAG DRAW DRIP DROP DRUG DRUM DRYS DUCK DUCT DUDE DUKE DULE DULL DUMB DUMP DUNE EACH EARS EASE EAST EASY EDGE EDGY EDIT EELS EGGS ELMS ELSE EMIT EVEN EVER EVES EXAM EXIT EYED EYESFACE FACT FADE FAIL FAIR FAKE FALL FAME FANG FANS FARE FAST FATE FEAR FEAT FEED FEEL FEET FELL FELT FEUD FILE FILL FILM FISH FIVE FIZZ FLEA FLEE FLEW FLIP FLOW FOAM FOIL FONT FOOD FOOL FOOT FORK FORM FORT FOUL FOUR FREE FROM FUEL FULL FUSE GAGE GAGS GAIN GALA GALE GAME GANG GAPE GASH GASP GATE GAZE GEEK GENE GIFT GIVE GLOW GLUE GNAT GNAW GOAL GOAT GOES GOLD GOLF GONE GOOD GOOF GOWN GUMS GUST GUTS GUVS GUYS HACK HAIL HAIR HALF HALL HALO HALT HAND HANG HARE HARK HARL HARM HARN HAVE HAWK HEAD HEAL HEAP HEAR HEAT HEEL HELL HELP HERD HERE HERO HIDE HIKE HIND HINT HISS HOLD HOLE HOME HONK HOOD HOOF HOOK HOPE HORN HOSE HOWS HUGE HURT HUSH HYPE ICED ICES ICON IDEA IDOL ILLS INCH INFO IRON JADE JAGS JAIL JAMS JAWS JEDI JERK JOLT JOYS JUKE JUMP JUNK JYNX KEEN KEPT KEYS KICK KIDS KILL KIND KING KISS KITE KIWI KNEE KNEW KNIT KNOT KNOW LADY LAGS LAIR LAMB LAME LAMP LAST LATE LAVA LAWK LAWN LAWS LAYS LAZY LEAD LEAF LEAK LEAP LEFT LIES LIFE LIFT LIKE LIME LINE LION LOAD LOAF LOCK LOGO LONG LOOK LOOP LORD LOSS LOST LOVE LUBE LUCK LUNG LYNX MADE MAID MAIL MAKE MALE MALL MANY MAPS MARS MATH MAZE MEAT MEEK MELT MEME MESS MIND MINE MISS MIST MOCK MODE MONK MOON MOSS MOST MOTH MOWS MUST MUTE MUTT NAIL NAME NEAR NEED NEEM NEST NEWS NEWT NEXT NICE NIGH NOOK NOON NOSE NOTE NOUN NULL OAKS OARS OATS ODOR OILS OILY OMEN OMIT ONCE ONES ONLY OOZE OPEN ORBS OVAL OVEL OVEN OVER OWLS OXEN PACE PAGE PAIN PAIR PALE PALM PARK PART PASS PAST PATH PATS PAWN PAWS PAYS PEAK PEAL PEAR PEAS PECK PEEK PEEL PEEP PERK PEST PETS PEWS PICK PIES PIKE PINK PINS PINT PIPE PITY PLAN PLAY PLEA PLUG PLUM PLUS POET POKE POOL POPE POUR POUT PREY PROP PUCK PULL PULP PUNK PUNS PUNT PURE PUSH QUAD QUIP QUIT QUIZ RACE RACK RAFT RAGE RAIL RAIN RAKE RAMP RANG RANK RANT RARE RAVE READ REAR REED REEF REEL REST RICE RICH RIDE RIDS RIMS RING RINK RIOT ROAM ROAR ROBE ROCK ROLL ROOF ROOM ROOT ROPE ROPY ROWS RUDE RUGS RUIN RULE RUNE RUNG RUSH RUST SAFE SAGA SAGE SAIL SALT SANE SANK SAYS SCAB SCAM SCAN SCAR SEAL SEAM SEAS SEAT SEED SEEK SEEL SEEM SEEN SEEP SEES SEGO SEGS SELF SELL SEND SENT SHIN SHOE SHOW SIGN SILK SING SINK SIZE SKIN SKIP SKIT SLAM SLAP SLOT SLOW SLUG SMOG SMUG SNAB SNAG SNAP SOAK SOAP SOCK SODA SOFA SOFT SOIL SOME SONG SONS SOON SOUL SOUP SOUR SPAN SPIN SPIT SPOT SPUN STAB STAY STEM STUN SUNG SUNK SURF SWAM SWAN SWAP SWAT SWAY SWIM SYNC TACK TACO TAGS TAIL TAKE TALE TALK TALL TANK TANS TAPE TASK TAXI TEAM TEAR TEEN TELL TENT TERM TEST TEXT THAN THAT THEM THEN THIN THIS THRU THUD THUG THUS TICK TIDE TIDY TIED TIER TIES TILE TILL TIME TINT TINY TIRE TOIL TOLD TOLL TOMB TOME TOOK TOOL TOON TORN TOSS TOTE TOWN TRAP TRAY TREE TRUE TUBE TUNA TURF TURN TUSH TWIG TWIN TYPE UGLY UMPS UNDO UNIT UPON URGE URNS USED USER USES VAIL VAIN VAMP VANS VASE VAST VEAL VEIL VENT VERB VERY VEST VETO VIBE VIEW VINE VINT VOID VOLT  VOTE VOWS WAGE WAIL WAIT WAKE WALK WALL WAND WANT WARM WARN WARP WASH WASP WAST WAVE WAVY WAYS WEAK WEBS WEEK WELL WELT WENT WEPT WERE WEST WHAT WHEN WHOM WIDE WIFE WIGS WILD WILL WIMP WIND WINE WING WINK WIRE WISE WISH WITS WOLF WOMB WOOD WOOF WOOL WORD WORK WORM WORN WOVE YARD YARN YAWN YEAH YEAR YELL YOGA YOKE YOUR ZEAL ZERO ZEST ZINC ZIPS ZONE ZOOM";
	
	fourLetters=AllWords.split(" ");
}
function setString(){
    //gets the String that is about to fall, and sets it to be the new gameText
    //currently only one string is supported at a time
	isTyped=false;
    if (gameOver==false){
        charLocation=0;
        //creates a random value between the size of the Letters Array and 10
        var randomNum= createRandomVar(10);
        //the number is greater than or equal to five call a palindrome as the String
        //alert(randomNum);
        if(randomNum>=7){
            flashing=0;
            //then call a palindrome value and setit to the string
            isPalindrome=true;
            var s=getPalindromeArray();
            word=s;
            //start flashing the text to show that its a palindrome
            flashingPalindrome();
            //alert(s);
        }
        else{
           isPalindrome=false;
		   var RandomWord= createRandomVar(fourLetters.length);
		   //alert(RandomWord);
           var r=fourLetters[RandomWord];
           word=r;
        }
       // alert(word);
        wordTotal++;//increase the word total by one
        //place the word in the game board
        document.getElementById("gametext").innerHTML = word;
		SlideText();
    }
    //return s;
}
function flashingPalindrome(){
    if(isPalindrome==true){
        //if the word dropping is a palindrome set an interval to make it flash
        //change the color to var s
        //alert(flashing);
        var color=flashingArray(flashing);
        document.getElementById("gametext").style.color =color;
        //change the var s value
        flashing++;
        if(flashing>1){
            flashing=0;
        }
        setTimeout("flashingPalindrome()",200);
    }
}
function flashingArray(num){
    //set the flashing colors
    var flash=new Array(2)
    flash[0]="#fffc00";//Yellow
    flash[1]="#00ccff";//Blue
    //returns the given num array value
    return flash[num];
}
function checkkey(evt) {
    //Gets the Key input from the player and uses a switch statement for each key
    var thisKey = (evt) ? evt.which : window.event.keyCode;
    var charStr = String.fromCharCode(thisKey);
    //alert(gameStart);
      testInput(charStr);
  
}
function adjustScore(length)
//changes the score value and returns it to its position at "score" in the bottom table
{
	if(gameOver==false){
    	var scoreUpdate=(length*100);
		var previousScore=score;
    	score+=scoreUpdate;
    	document.getElementById("score").innerHTML = score;
		if (score>previousScore)
			{
				//alert(wordSpeed);
				wordSpeed=wordSpeed+1;
				//alert(wordSpeed);
			}
	}
}
function SlideText(){
    /* Takes the text located within the table (w/ the id "gametext") and moves it 1 pixel a second
     * down the table until it reaches the bottom (400)*/
    if((gameOver==false)&&(isTyped==false)){
     document.getElementById("gametext").style. top = currPos("gametext") + wordSpeed + "px";
     //the above gets the current possion (calling the currPos funtion) and adds one pixel
     if (currPos("gametext") < "400") {
        setTimeout("SlideText()",200);//creates the time interval
     }
     else{
         //if the text falls below show image or effect to show the user they have failed to type the word
        // setBottomColor();
         //remove value from score
         soundManager.play('error');
		 //adjustScore(-(word.length));
          missedWords++;
		  alert(missedWords);
          if(missedWords==5){//game is over if 5 words have been wrong
             // alert("gameOver")
              //show the gameOver gif
             gameOver=true;	  
             document.getElementById("gameboard").style.backgroundImage="url(gameover.gif)";
              //setBoardBackground("texture","gameover.gif");
              //create code to stop all other methods
          }
         //reset the word
            wordReset();
         //recursion to start the sliding all over again
            //SlideText();

         }
    }
}
function currPos(elem) {
    //the currPos function that is used by the SlideText function
    //returns the elements current Bottom position
    //alert(document.getElementById(elem).top);
        return document.getElementById(elem).offsetTop;
     }
function muteIt(){
	soundManager.mute();
}	 

function unmuteIt(){
	soundManager.unmute();
}	 
	 
/*function resetGame(){
	gameStart=false;
	getCityArray();
    doOnLoad();
}*/
function testInput(character)
//takes the user's inputted character and test to see if its the first character in the string
{
	if ((character==' ')&&(gameStart==false)){
		gameStart=true;
		getCityArray();
        doOnLoad();
	}
   		if ((gameOver==false)||(gameStart==false)){
		//plays random sounds of the characters are typed
   		if (character==word.charAt(charLocation)){
			var i = Math.round((8 - 1)*Math.random());
		while(sound[i].playState == 1){
				i = Math.round((8 - 1)*Math.random());
			}
		 	sound[i].play();
		 
        if (charLocation==0)
        {//if its the first letter change the text color to green
            document.getElementById("gametext").style.color = "#00ff00";//green
        }
        //if the charLocation is the word length the user has finished typing the word
        if(charLocation==(word.length-1)){//they have typed the entire word
				isTyped=true;//change isTyped (this will stop the slidding text
                //output the word in the section
                //update the score
                adjustScore(word.length);
                if(isPalindrome==true){
                    //if the word is a palindrome set it to a regular word
                    isPalindrome=false;
                    charLocation=0;
                    //set the color back to white (the normal text color)
                    document.getElementById("gametext").style.color = "#ffffff";
                    //reset typed area
                    typed="";
                    //print the typed character it in "typed" element under the table
                    document.getElementById("typed").innerHTML = typed;
                    return;
                }
                else{
                //the user has typed the word correctly now reset (get a new word and put it back to the top)
                //make the word smaller until it disappears
                changeFontSize("gameText");
               }
       		 }

            //increase the char location by one (to find the next char)
       		 charLocation++;
       		 //set the typed string to the chararacter + what is currently in typed
        	typed=typed+character;
       		 //print the typed character it in "typed" element under the table
       		 document.getElementById("typed").innerHTML = typed;
    	}
		else{
			soundManager.play('error');
		}
   }
}
function changeFontSize(){
    var element="gametext";
    //alert("In Change FontSize");
    if (currFontSize("gametext") > "0") {
        //alert(currFontSize("gametext"));
        var changeTo=currFontSize("gametext")-1;
        //alert(changeTo);
        document.getElementById(element).style.fontSize = changeTo+"px";
        setTimeout("changeFontSize()",25);//creates the time interval
    }
    else{
        //reset the word back to its original location
        wordReset();
        //Start the sliding all over again
        //SlideText();
        }
    
    //var curFon=parseInt(document.getElementById(element).style.fontSize);
   // alert(curFon);
}
function currFontSize(element){
    return parseInt(document.getElementById(element).style.fontSize);
}
function setFont(element){
    //sets the original game text font size
    document.getElementById(element).style.fontSize = startFontSize+"px";
    //var curFont=parseInt(document.getElementById(element).style.fontSize);
    //alert(curFont);
}
function wordReset(){
//resets a word back to orignally gamePlay type
    //create a new string
    if (gameOver==true){
    	document.getElementById("gametext").innerHTML = "";
    	//reset the typed bar to empty
     	typed="";
    	//place the empty type into the table in the index.html
    	document.getElementById("typed").innerHTML = typed;
    	//reset the char count
    	charLocation=0;
    }
    else{
   	 	
   		//reset the game text's fontSize back to original fontSize
    	setFont("gametext");
     	//resets the word location either when the user types the word or when the word has reached the bottom
    	document.getElementById("gametext").style.top ="-19px";
    	//call the drop location of the next text
    	randomDropLocation();
    	//changes the color back to black
    	document.getElementById("gametext").style.color ="#ffffff";
    	//reset the typed bar to empty
     	typed="";
    	//place the empty type into the table in the index.html
    	document.getElementById("typed").innerHTML = typed;
    	//reset the char count
    	charLocation=0;
		setString();
    }
}
function setBoardBackground(element, image){
   /*creates a background for the given element with a given image name*/
     document.getElementById(element).style.backgroundImage="url("+image+")";
}
function setColorArray(num){
    var colors=new Array(4);
    colors[0]="#ffffff";//white
    colors[1]="#fff002";//yellow
    colors[2]="#ff9000";//orange
    colors[3]="#ff0000";//red
    return colors[num];
}
function setBottomColor(){//calls the array portion
    var colorToChange=setColorArray(numberColor);
   // alert(colorToChange);
    if(numberColor==5){
        numberColor=0;
        return;
    }
    else{
         //change the text color
        document.getElementById("gametext").style.color =colorToChange;
        numberColor++;
        //creates the time interval
        setTimeout("setBottomColor()",10);
    }
}
function setPalindromeArray(){
    //sets all the words to the palindromeArray
    ////returns the array
    //palindrome Array current consists of 25 words
    var palindromeArray=new Array("NOON","PEEP","SEES","ROTOR","POP","DAD","MOM",
    "SOLOS","NUN","EYE","DEED","PIP","TOOT","RADAR","LEVEL","WOW","DID","EVE","GAG",
    "PEP","TOT","KAYAK","MUM");
    return palindromeArray;
}
function getPalindromeArray(){
	isTyped=false;
    //returns a word from the palindromeArray from math.random
    var palindromeArray=setPalindromeArray();
    var randomNum=createRandomVar(23);
    //alert(palindromeArray[randomNum]);
    return palindromeArray[randomNum];
}





