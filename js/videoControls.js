/*globals $ window document */

contentLoaded(window, function () {

    var videoEl = document.getElementById('video'),
        playPauseBtn = document.getElementById('playPause'),
        vidControls = document.getElementById('controls'),
        muteBtn = document.getElementById('muteUnmute'),
        timeHolder = document.getElementById('timer');

    // Check to see if the video is already ready (if it's cached, for example)
    if (videoEl.readyState === 4) {
        videoEl.removeAttribute('controls');
        vidControls.classList.remove('hidden');
    }

    videoEl.addEventListener('canplay', function () {
        videoEl.removeAttribute('controls');
        vidControls.classList.remove('hidden')
    }, true);

    // click handler for play/pause btn
    playPauseBtn.addEventListener('click', function () {
        if (videoEl.paused) {
            videoEl.play();
        } else {
            videoEl.pause();
        }
    }, false);

    // listening for 'play' events
    videoEl.addEventListener('play', function () {
        playPauseBtn.classList.add('playing');
        playPauseBtn.title = "Pause";
    }, false);

    // listening for 'pause' events
    videoEl.addEventListener('pause', function () {
        playPauseBtn.classList.remove('playing');
        playPauseBtn.title = "Play";
    }, false);

    muteBtn.addEventListener('click', function () {
        if (videoEl.muted) {
            videoEl.muted = false;
        } else {
            videoEl.muted = true;
        }
    }, false);

    videoEl.addEventListener('volumechange', function () {
    if (videoEl.muted) {
    muteBtn.classList.add('muted');
    } else {
    muteBtn.classList.remove('muted');
    }
}, false);

    videoEl.addEventListener('ended', function () {
    videoEl.currentTime = 0;
}, false);
    
    videoEl.addEventListener('timeupdate', function () {
    timeHolder.innerHTML = secondsToTime(videoEl.currentTime);
}, false);
var h = Math.floor(s / (60 * 60)),
    dm = s % (60 * 60),
    m = Math.floor(dm / 60),
    ds = dm % 60,
    secs = Math.ceil(ds);
    if (secs === 60) {
    secs = 0;
    m = m + 1;
}

if (secs < 10) {
    secs = '0' + secs;
}

if (m === 60) {
    m = 0;
    h = h + 1;
}

if (m < 10) {
    m = '0' + m;
}
    if (h === 0) {
    fulltime = m + ':' + secs;
} else {
    fulltime = h + ':' + m + ':' + secs;
}

return fulltime;
    timeHolder.innerHTML = secondsToTime(videoEl.currentTime);
   
