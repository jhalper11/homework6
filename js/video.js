var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
    video.play();
    span = document.getElementById("volume").innerHTML=(video.volume*100)+'%';
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
	console.log("Pause Video");
});
document.querySelector("#vol").addEventListener("click", function(){
    video.value = this.value/100;
    console.log("Volume: " + video.volume);
    document.querySelector("#volume").innerHTML=(video.volume*100)+'%';
});
document.querySelector("#speedup").addEventListener("click", function(){
    var currentspd = video.playbackRate;
    video.playbackRate = (currentspd)/0.9;
    console.log("Current speed: " + currentspd);
});
document.querySelector("#slowdown").addEventListener("click", function(){
    var currentspd = video.playbackRate;
    video.playbackRate = (currentspd)*0.9;
    console.log("Current speed: " + currentspd);
});
document.querySelector("#skip").addEventListener("click", function(){
    if(video.currentTime + 5 > video.duration){
        video.currentTime = 0;
    }
    else{
        video.currentTime + 5;
    }
    console.log("Current time: " + video.currentTime);
    video.play();
});
document.querySelector("#mute").addEventListener("click", function(){
    if(video.muted == true){
        video.muted = false;
        document.getElementById("mute").innerHTML='Mute';
    }
    else{
        video.muted = true;
        document.getElementById("mute").innerHTML='Unmute';
    }
});
document.querySelector("#gray").addEventListener("click", function(){
    document.getElementById("video").style.filter = "grayscale(100%)";
});
document.querySelector("#normal").addEventListener("click", function(){
    document.getElementById("video").style.filter = "grayscale(0%)";
});                                                
