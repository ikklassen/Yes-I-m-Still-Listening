
var i = 0;
var t = 0;
	
function myTimer() {
	
	var formatTime = SecondsTohhmmss(t);
    var timeArray = formatTime.split("-");
	var h = timeArray[0];
	var m = timeArray[1];
	var s = timeArray[2];
	var time = "";	
	if (h != "00"){		
	time = (h + "h" + m + "m"+ s + "s");
	}else{		
	time = ( m + "m" + s + "s");
	}	
	var element = document.getElementsByClassName('Button')[0];	
	if(element.innerHTML == "<span>I'm Still Listening</span>"){
		element.click();		
		i++;
		console.log(i + " clicks in " + time);	
	}	
	t++;	
}
var SecondsTohhmmss = function(totalSeconds) {
  var hours   = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
  // round seconds
  seconds = Math.round(seconds * 100) / 100;
  var result = (hours < 10 ? "0" + hours : hours);
  result += "-" + (minutes < 10 ? "0" + minutes : minutes);
  result += "-" + (seconds  < 10 ? "0" + seconds : seconds);
  return result;
}
function enter(){
	var myVar = setInterval(myTimer, 1000);
}
setTimeout("enter()", 500);
