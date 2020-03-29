const container = document.querySelector('#videoContainer');
const video = document.querySelector('video');
const progressBar = document.querySelector('progress');
const play = document.querySelector('#playPause');
const volume = document.querySelector('#volume');
const velocity = document.querySelector('#velocity');
const rw = document.querySelector('#rewind');
const fw = document.querySelector('#forward');
const full = document.querySelector('#fullScreen');

// currentTime, duration

// Play/pause on click on button, screen or space key
video.addEventListener('click', playPause);
play.addEventListener('click', playPause);
container.addEventListener('keypress', e => {
  if (e.keyCode === 32) {
    playPause();
  }
});
// Change button icon on video play/pause
video.addEventListener('pause', iconChange);
video.addEventListener('play', iconChange);

video.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('click', goTo);

volume.addEventListener('input', updateVolume);
velocity.addEventListener('input', updateVelocity);
volume.addEventListener('mousemove', updateVolume);
velocity.addEventListener('mousemove', updateVelocity);

let mousedown = false;
progressBar.addEventListener('click', goTo);
progressBar.addEventListener('mousemove', (e) => mousedown && goTo(e));
progressBar.addEventListener('mousedown', () => mousedown = true);
progressBar.addEventListener('mouseup', () => mousedown = false);


rw.addEventListener('click', rewindVideo);
fw.addEventListener('click', forwardVideo);
full.addEventListener('click', fullScreen);

// =============== FUNCTIONS ========================

// Plays or pauses video
function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  // ALSO:
  // const method = video.paused ? 'play' : 'pause';
  // video[method]();
}

// Changes play button icon on play/pause
function iconChange() {
  play.innerHTML = video.paused ? '►' : '❚❚';
  // ALSO:
  // this.paused
}

// Updates progress bar while playing
function updateProgress() {
  progressBar.value = video.currentTime / video.duration * 100;
}

function updateVolume() {
  video.volume = volume.value;
}

function updateVelocity() {
  video.playbackRate = velocity.value;
}

// ALSO:
// function handleRangeUpdate() {
//   video[this.name] = this.value;
// }

function rewindVideo() {
  video.currentTime -= 10;
}

function forwardVideo() {
  video.currentTime += 25;
}

// ALSO:
// function skip() {
//   video.currentTime += parseFloat(this.dataset.skip);
// }

// On click on bar, moves video
function goTo(e) {
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// De/activates fullscreen
function fullScreen() {
  if (document.fullscreen) {
    video.exitFullscreen();
  } else {
    video.requestFullscreen();
  }
}
