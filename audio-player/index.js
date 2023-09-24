let nextBtn = document.querySelector(".button_next");
let playBtn = document.querySelector(".button_play");
let previousBtn = document.querySelector(".button_prev");

let now = document.querySelector(".now");
let end = document.querySelector(".end");

let sliderCurrent = document.querySelector(".current_bar");


let songTitle = document.querySelector(".song-title");
let songAuthor = document.querySelector(".song_author");
let coverImg = document.querySelector('.img')

let bgImg = document.querySelector('.bg')

const audio = document.querySelector('audio');


let isPlaying = false;

let progress_bar = document.querySelector(".progress_bar");


const tracks = ['Travis Scott - I KNOW', 'YOASOBI - アイドル']


let trackI = 0;
let audio_currentTime = audio.currentTime;

let trackName = [
    {
    name: "I KNOW",
    author: 'Travis Scott',
    end: '3:31',
    },

    {
    name: "アイドル",
    author: 'YOASOBI',
    end: '3:33',
    }
];

function init(track) {
    bgImg.src = `assets/bg/${track}.gif`
    
    songTitle.textContent = trackName[trackI].name;
    songAuthor.textContent = trackName[trackI].author;

    end.textContent = trackName[trackI].end;
    audio.src = `assets/songs/${track}.mp3`

    coverImg.src = `assets/covers/${track}.jpeg`
}
init(tracks[trackI]);


function play() {
    audio.play()
    isPlaying = true;
    playBtn.classList.add('pause')
}

function pause() {
    audio.pause()
    isPlaying = false;
    playBtn.classList.remove('pause')
}

playBtn.addEventListener('click', () => {
    if(!isPlaying) {
        play()
    } else {
        pause()
    }
})

function playNext() {
    trackI++
 if (trackI > tracks.length - 1) {

    trackI = 0;
    }

    init(tracks[trackI]);
    play()
}
nextBtn.addEventListener('click', playNext)
audio.addEventListener('ended', playNext)

        
function playPrevious() {
    trackI--
    if (trackI < 0) {
        trackI = tracks.length - 1;
       }
       
       init(tracks[trackI]);
       play()
}

previousBtn.addEventListener('click', playPrevious)


///Duration and timestamps


function goToPoint () {
let audio_duration = audio.duration;
let audio_currentTime = audio.currentTime;

let currentPrecent = (audio_currentTime / audio_duration) * 100;
sliderCurrent.style.width = `${currentPrecent}%`;
}


function timer() {
    let minutes = Math.floor(audio.currentTime / 60);
    let seconds = Math.floor(audio.currentTime - minutes  * 60);
    now.textContent = minutes + ':' + seconds;

    if (seconds < 10) {
        now.textContent = minutes + ':' + '0' + seconds;
    }
}

audio.addEventListener('timeupdate', timer)

function goToOnclick(event) {
    let audio_duration = audio.duration;

    let bar_width = progress_bar.clientWidth;
    let bar_onclick = event.offsetX;

    let result = (bar_onclick / bar_width) * audio_duration;
    audio.currentTime = result;
}


audio.addEventListener('timeupdate', goToPoint)
progress_bar.addEventListener('click', goToOnclick)


