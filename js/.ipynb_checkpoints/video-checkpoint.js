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

document.querySelector("#faster").addEventListener("click", function(){
    var currentspd = video.playbackRate;
    video.playbackRate = (currentspd)/0.9;
    console.log("Current speed is: " + currentspd);
})

document.querySelector("#slower").addEventListener("click", function(){
    var currentspd = video.playbackRate;
    video.playbackRate = (currentspd)*0.9;
    console.log("Current speed is: " + currentspd);
})

document.querySelector("#skip").addEventListener("click", function(){
    if(video.currentTime + 5 > video.duration){
        video.currentTime = 0;
    }
    else{
        video.currentTime += 5;
    }
    console.log("Current time of the video: " + video.currentTime);
    video.play();
})

document.querySelector("#mute").addEventListener("click", function(){
    if(video.muted == true){
        video.muted = false;
        document.getElementById("mute").innerHTML='Mute';
    }
    else{
        video.muted = true;
        document.getElementById("mute").innerHTML='Unmute';
    }
})

document.querySelector("#volumeSlider").addEventListener("change", function(){
    video.volume = this.value/100;
    console.log("Current volume: " + video.volume);
    document.querySelector("#volume").innerHTML=(video.volume*100)+"%";
});

document.querySelector("#old").addEventListener("click", function(){
    video.classList.add('oldTime');
    console.log('grayscale');
});

document.querySelector("#original").addEventListener("click", function(){
    video.classList.remove('oldTime');
    console.log('original');
}); 
