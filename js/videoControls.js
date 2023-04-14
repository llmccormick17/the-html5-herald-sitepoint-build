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
