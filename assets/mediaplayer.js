var playPauseBtn = document.getElementById('play-pause');
var stopBtn = document.querySelector('.stop');
var rwdBtn = document.querySelector('.rwd');
var fwdBtn = document.querySelector('.fwd');
var timeLabel = document.querySelector('.time');
var player = document.querySelector('video');
var volumes = document.getElementById('volume');
var muteBtn = document.getElementById('mute');
var imgplay = document.querySelector('.play')
var imgnomute = document.querySelector('.nomute')

// fonctionnalité play et pause

playPauseBtn.onclick = function() {
    if(player.paused) {
      player.play();
      imgplay.setAttribute("src","icone/pause.png")
      
    } else {
      player.pause();
      imgplay.setAttribute("src","icone/play.png")
    }
  };


//   fonctionnalité pour faire STOP

  stopBtn.onclick = function() {
    player.pause();
    player.currentTime = 0;
    
  };
  //   fonctionnalité pour avancer et reculer

  rwdBtn.onclick = function() {
    player.currentTime -= 3;
  };
  
  fwdBtn.onclick = function() {
    player.currentTime += 3;
    if(player.currentTime >= player.duration || player.paused) {
      player.pause();
      player.currentTime = 0;
      playPauseBtn.textContent = 'Play';
    }
  };
//   controler l'affichage du temps ecoulé

  player.ontimeupdate = function() {
    var minutes = Math.floor(player.currentTime / 60);
    var seconds = Math.floor(player.currentTime - minutes * 60);
    var minuteValue;
    var secondValue;
  
    if (minutes<10) {
      minuteValue = "0" + minutes;
    } else {
      minuteValue = minutes;
    }
  
    if (seconds<10) {
      secondValue = "0" + seconds;
    } else {
      secondValue = seconds;
    }
  
    mediaTime = minuteValue + ":" + secondValue;
    timeLabel.textContent = mediaTime;
  };
//   mute la video


muteBtn.addEventListener('click', function(){

    if(player.muted){
        player.muted = false;
        imgnomute.setAttribute("src","icone/nomute.png")
    }else{
        player.muted = true;
        imgnomute.setAttribute("src","icone/mute.png")
        }
})
// volume

volumes.addEventListener('change', function(){

    player.volume = volumes.value / 100
})

// player.removeAttribute('controls');