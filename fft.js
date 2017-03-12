function start(){

	var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	var analyser = audioCtx.createAnalyser();
	var audioSource = null;



	var audio = document.createElement("audio");
	document.body.appendChild(audio);
	audio.src = "eline.mp3";
	audio.addEventListener("canplaythrough", function(){
		audioSource = audioCtx.createMediaElementSource(this);
		audioSource.connect(audioCtx.destination);
		this.play();
	})
}

window.addEventListener("load", start);