const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

updatePlayIcon();

//PLay & Pause Video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//update play/pause icon
function updatePlayIcon() {
    const icon = play.querySelector('i')
    if (video.paused) {
        icon.className = "fa fa-play fa-2x"

    } else {
        icon.className = "fa fa-pause fa-2x"
    }
}

//update progress
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100

    //get minutes
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    //Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}: ${secs}`
}

function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

//Event listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress)