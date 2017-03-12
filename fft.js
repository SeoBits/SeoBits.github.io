var FFT_SIZE = 32;
var MAX_DB = 30;

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();
analyser.fftSize = FFT_SIZE;
analyser.maxDecibels = MAX_DB;
analyser.smoothingTimeConstant = 0.5;
var frequencyData = new Uint8Array(analyser.frequencyBinCount);
var barArray = [];
var UNIT_HEIGHT = 100/255;
var frameUpdateCounter = 0;
var frameStep = 5;
var barDecreaseStep = 2;


function createBars(barNumber){
	var barWidth = 100/barNumber;
	for(var indexBar = 0; indexBar < barNumber; indexBar++){
		var barElement = document.createElement("div");
		barElement.className = "bar";
		barElement.style.left = (indexBar * barWidth) + "%";
		barElement.style.width = barWidth + "%";
		document.body.appendChild(barElement);
		barArray.push(barElement);
	}
}

function render(){
	frameUpdateCounter++;
	if(frameUpdateCounter >= frameStep){
		frameUpdateCounter = 0;
		analyser.getByteFrequencyData(frequencyData);
	}
	for(var indexFft = 0; indexFft < analyser.frequencyBinCount; indexFft++){
		barArray[indexFft].style.height = (UNIT_HEIGHT * frequencyData[indexFft]) + "%";
		if(frequencyData[indexFft] > barDecreaseStep){
			frequencyData[indexFft] += -barDecreaseStep;	
		}
		
	}
	window.requestAnimationFrame(render);
}

function start(){

	createBars(analyser.frequencyBinCount);
	analyser.fftSize = FFT_SIZE
	var audio = document.getElementById("audio");
	var playButton = document.getElementById("play-button");
	playButton.style.visibility = "visible";
	playButton.addEventListener("click", function(){
		playButton.style.visibility = "hidden";
		var audioSource = audioCtx.createMediaElementSource(audio);
		audioSource.connect(analyser);
		analyser.connect(audioCtx.destination);
		analyser.getByteFrequencyData(frequencyData);
		audio.play();
		window.requestAnimationFrame(render);
	})	

	document.body.appendChild(audio);	
}

window.addEventListener("load", start);