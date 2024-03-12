//Musica
const audioPlayer = new Audio();
const albumArt = document.querySelector('.album-art');
const playButtons = document.querySelectorAll('.play-button');
const musicProgress = document.getElementById('music-progress');
const playButton = document.getElementById('play-button');
const backButton = document.getElementById('back-button');
const nextButton = document.getElementById('next-button');
const playlistItems = document.querySelectorAll('.playlist-table tbody tr ');
const musicaElement = document.getElementById('musica');
const controlVolumen = document.getElementById('controlVolumen');
const currentTimeDisplay = document.getElementById('current-time');
const totalTimeDisplay = document.getElementById('total-time');


let currentSongIndex = 0;
let isPlaying = false;
let totalSongs = playlistItems.length;

function changeSong(index) {
    // Obtén el nombre de la música correspondiente al índice actual del bucle
    //const datos_musica = [
    //    {
    //        imagen: "img/image1.jpg",
    //        nombre:"boy1",
    //       musica: "music1.mp3",
    //   },
    //    
    const nombreDeLaMusica = datos_musica[index].nombre; 

    // Obtén la fuente de audio (ruta de la música) del atributo data-src del botón de reproducción
    const audioSource = playlistItems[index].querySelector('.play-button').getAttribute('data-src');

    // Obtén la fuente de la imagen de la etiqueta img dentro del elemento playlistItems
    const imageSource = playlistItems[index].querySelector('img').getAttribute('src');

    // Establece la fuente del reproductor de audio
    audioPlayer.src = audioSource;

    // Actualiza la visualización de la portada de la canción
    albumArt.innerHTML = `
        <div class="circle-container">
            <img id="circle" class="circle" src="${imageSource}" alt="Portada de la canción ${index + 1}">
        </div>
    `;

    // Carga la nueva fuente de audio
    audioPlayer.load();

    // Reproduce la nueva canción si estaba reproduciéndose previamente
    if (isPlaying) {
        audioPlayer.play();
    }

    // Actualiza el nombre de la música en el elemento correspondiente
    musicaElement.textContent = nombreDeLaMusica;

    // Actualiza el índice de la canción actual
    currentSongIndex = index;
}


controlVolumen.addEventListener('input', () => {
    audioPlayer.volume = parseFloat(controlVolumen.value);
});



//  la siguiente canción en la lista de reproducción se reproduzca automáticamente
audioPlayer.addEventListener('ended', () => {
    const nextSongIndex = (currentSongIndex + 1) % totalSongs;
    changeSong(nextSongIndex);
});

//boton Inicio
playButton.addEventListener('click', () => {
    if (isPlaying) {
        // Si la música está reproduciéndose, pausarla
        audioPlayer.pause();
        playButton.innerHTML = `
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM10,8l6,4-6,4Z">
                </path>
            </g>
        `;
        isPlaying = false;
    } else {
        // Si la música está pausada, reproducirla
        audioPlayer.play();
        playButton.innerHTML = `
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" style="fill: #00ffde;"></path>
        `;
        isPlaying = true;
    }
});




// boton play de la tabla
playButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
    playButton.innerHTML = `
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" style="fill: #00ffde;"></path>
    `;
        isPlaying = true;
        changeSong(index);
    });
});


//boton adelantar
nextButton.addEventListener('click', () => {
    const nextSongIndex = (currentSongIndex + 1) % totalSongs;
    changeSong(nextSongIndex);
});

//boton retroceder
backButton.addEventListener('click', () => {
    const nextSongIndex = (currentSongIndex - 1) % totalSongs;
    changeSong(nextSongIndex);
});

//Progresbar 0% de musica
audioPlayer.addEventListener('loadedmetadata', () => {
    musicProgress.value = 0; // Establecer el valor inicial del rango en 0
});

// musica  progressbar
audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    // Verifica que la duración sea un valor válido y mayor que cero
    if (!isNaN(duration) && isFinite(duration) && duration > 0) {
        musicProgress.value = currentTime / duration;
        // Formatear y mostrar el tiempo actual y el tiempo total
        currentTimeDisplay.textContent = formatTime(currentTime);
        totalTimeDisplay.textContent = formatTime(duration);
    }
});

musicProgress.addEventListener('input', () => {
    const newPosition = parseFloat(musicProgress.value);
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = newPosition * duration;
});

// Función para formatear el tiempo en minutos y segundos
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}




// Reproduce la primera canción al cargar la página
changeSong(currentSongIndex);


