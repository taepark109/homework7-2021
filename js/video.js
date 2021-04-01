var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML= video.volume*100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate /= 1.05;
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.05;
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime)
	video.currentTime += 15;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
		console.log("New location " + video.currentTime)
	}
	console.log("New location " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML= "Unmute"
		console.log("Muted")
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML= "Mute"
		console.log("Unmuted")
	}
});


document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value)
	var slider = this.value;
	video.volume = slider / 100;
	document.querySelector("#volume").innerHTML= video.volume*100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Back to Normal");
	video.classList.remove("oldSchool");
});