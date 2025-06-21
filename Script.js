const audioPlayer = document.getElementById("audioPlayer");
const playPauseButton = document.getElementById("playPauseButton");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const trackNameElement = document.getElementById("trackNameElement");
const trackImageElement = document.getElementById("trackImageElement");

const audioFiles = [
    {
        name: 'Aadat Unplugged',
        src: 'music/Aadat Unplugged.mp3',
        image: 'trackimages/aadat.jpg'
    },
    {
        name: 'ACDC - Thunderstruck (Live At River Plate, December 2009)',
        src: 'music/ACDC - Thunderstruck (Live At River Plate, December 2009).mp3',
        image: 'trackimages/acdc-thunderstruck.jpg'
    },
    {
        name: 'Creed - One Last Breath (Official Video)',
        src: 'music/Creed - One Last Breath (Official Video).mp3',
        image: 'trackimages/creed.jpg'
    }
];

let currentTrack = 0;
let isPlaying = false;

function updateTrackName() {
    trackImageElement.src = audioFiles[currentTrack].image;
    trackNameElement.textContent = audioFiles[currentTrack].name;
    audioPlayer.src = audioFiles[currentTrack].src;
}

function togglePlaypause() {
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        playPauseButton.textContent = '\u25B6'; // Play symbol ▶
    } else {
        audioPlayer.play();
        isPlaying = true;
        playPauseButton.textContent = '\u275A\u275A'; // Pause symbol ‖
    }
}

playPauseButton.addEventListener('click', () => {
    togglePlaypause();
});

nextButton.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % audioFiles.length;
    updateTrackName();
    if (isPlaying) {
        audioPlayer.play();
    }
});

prevButton.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + audioFiles.length) % audioFiles.length;
    updateTrackName();
    if (isPlaying) {
        audioPlayer.play();
    }
});

updateTrackName();

