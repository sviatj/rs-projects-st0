let nextBtn = document.querySelector(".button_next");
let playBtn = document.querySelector(".button_play");
let previousBtn = document.querySelector(".button_prev");


let songTitle = document.querySelector(".song-title");
let songAuthor = document.querySelector(".song_author");
let coverImg = document.querySelector('.img')

const audio = document.querySelector('audio');


let isPlaying = false;

let progress_bar = document.querySelector(".progress_bar");
let songContainer= document.querySelector(".info");

const songs = ['Ace Hood - Bugatti (Feat. Future & Rick Ross)', 'YOASOBI - アイドル']


let songI = 0;

let songName = [
    {
    name: "Bugatti (Feat. Future & Rick Ross)",
    author: 'Ace Hood',
    },

    {
    name: "アイドル",
    author: 'YOASOBI'
    }
];

function init(song) {
    songTitle.textContent = songName[songI].name;
    songAuthor.textContent = songName[songI].author;
    audio.src = `assets/songs/${song}.mp3`
    coverImg.src = `assets/covers/${song}.jpeg`
}
init(songs[songI]);


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
    songI++
 if (songI > songs.length - 1) {
     songI = 0;
    }

    init(songs[songI]);
    play()
}
nextBtn.addEventListener('click', playNext)
        
function playPrevious() {
    songI--
    if (songI < 0) {
        songI = songs.length - 1;
       }

       init(songs[songI]);
       play()
}

previousBtn.addEventListener('click', playPrevious)

///Duration and timestamps

