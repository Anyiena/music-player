// Declaring var location .. selects elements from DOM by Id
let progress = document.getElementById("progress"); // slider
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");// controls playing and pausing the song

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
// Play and pause feature 
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play()
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}
// if song is playing update its time interval every 500millisec and the slider will move
  if(song.play()){
      setInterval(()=>{
          progress.value = song.currentTime;
      }, 500);
  }
// if there will be any change on the progress bar, it will update the progress value and it will add or remove the ctrlIcon
  progress.onchange = function (){
      song.play();
      song.currentTime = progress.value;
      ctrlIcon.classList.add("fa-pause");
      ctrlIcon.classList.remove("fa-play");
  }
