var mi
   milsec=document.getElementById('msec-span');
var sec_span=document.getElementById('sec-span');
var min_span=document.getElementById('min-span');
var descript=document.getElementById('desc');
   var interval;


function timer() {
	msec++;
	milsec.innerHTML=msec;
	if (msec>=100) {
		sec++;
	sec_span.innerHTML=sec;
	msec=0;
	}
	else if (sec>=60) {
		min++;
		min_span.innerHTML=min;
		sec=0;
	}
}
function start(){
   interval=setInterval(timer,10);
}

function stop(){
   clearInterval(interval);
    var inputVal1 = document.getElementById("myInput1").value;
    var inputVal2 = document.getElementById("myInput2").value;
    var inputVal3 = document.getElementById("myInput3").value;
    descript.innerHTML=inputVal1+inputVal2+inputVal3;
}
function reset(){
    min=0;
    sec=0;
    msec=0;
    min_span.innerHTML=min;
    sec_span.innerHTML=sec;
	milsec.innerHTML=msec;
	stop();
}        function getInputValue(){
            // Selecting the input element and get its value 
           
            
            // Displaying the value
        }