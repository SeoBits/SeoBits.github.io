var FFT_SIZE = 128

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();
analyser.fftSize = FFT_SIZE
var frequencyData = new Uint8Array(analyser.frequencyBinCount);
var barArray = [];
var UNIT_HEIGHT = 255/100


function createBars(barNumber){
	var barWidth = 100/barNumber;
	for(var indexBar = 0; indexBar < barNumber; indexBar++){
		var barElement = document.createElement("div");
		barElement.className = "bar";
		barElement.style.width = barWidth + "%";
		document.body.appendChild(barElement);
		barArray.push(barElement);
	}
}

function render(){
	analyser.getByteFrequencyData(frequencyData);
	for(var indexFft = 0; indexFft < analyser.frequencyBinCount; indexFft++){
		barArray[indexFft].style.height = UNIT_HEIGHT * frequencyData[indexFft] + "%";
	}
	window.requestAnimationFrame(render);
}

function start(){

	createBars(analyser.frequencyBinCount);
	analyser.fftSize = FFT_SIZE
	var audioSource = null;
	var audio = document.createElement("audio");
	document.body.appendChild(audio);
	audio.src = "eline.mp3";
	audio.addEventListener("canplaythrough", function(){
		audioSource = audioCtx.createMediaElementSource(this);
		audioSource.connect(analyser);
		analyser.connect(audioCtx.destination);
		analyser.getByteFrequencyData(frequencyData);
		this.play();
	})

	window.requestAnimationFrame(render);


}

window.addEventListener("load", start);