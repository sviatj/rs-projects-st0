let nextBtn = document.querySelector(".next");
let playBtn = document.querySelector(".button_play");
let previous = document.querySelector(".previous");
let songs_wrapper = document.querySelector(".next");

let songtitle = document.querySelector('.song-title')
let coverImg = document.querySelector('.song-title')

const audio = document.querySelector('audio');


let isPlaying = false;

let progress_bar = document.querySelector(".progress_bar");
let song_container= document.querySelector(".song_container");

const songs = ['Ace Hood - Bugatti (Feat. Future & Rick Ross)', 'yoasobi-idol-mp3']

let songI = 0;
    
function init(song) {
    audio.src = `assets/songs/${song}.mp3`
}
init(songs[songI]);

function play() {
    audio.play()
    isPlaying = true;
    playBtn.classList.toggle('pause')
}

function pause() {
    audio.pause()
    isPlaying = false;
    playBtn.classList.toggle('pause')
}

playBtn.addEventListener('click', () => {
    if(!isPlaying) {
        play()
    } else {
        pause()
    }
})
        