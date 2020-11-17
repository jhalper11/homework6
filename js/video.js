var video document.getElementById('video');
var volume_ = document.getElementById('vol-control');

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

function playPause() {
    var mediaPlayer = document.getElementById('media-video');
    if (mediaPlayer.paused) {
        mediaPlayer.play(); 
        $('.pause-btn').show();
        $('.play-btn').hide();
    } else {
        mediaPlayer.pause(); 
        $('.play-btn').show();
        $('.pause-btn').hide();
    }
}
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
});
function speedUp() {
    document.querySelector('video').defaultPlaybackRate = 0.9;
    document.querySelector('video').play()
}
function slowDown(){
    document.querySelector('video').defaultPlaybackRate = 1.1;
    document.querySelector('video').play()
}
function mute(){
    video.muted = true
}
function changevolume() {

 var x = volume_.value;
 var y = x / 100;

 video.volume = y;

}