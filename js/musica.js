const datos_musica = [
    {
        imagen: "img/image1.jpg",
        nombre:"Aventura - La Boda",
        musica: "Aventura - La Boda.mp3",
    },
    {
        imagen: "img/image2.jpg",
        nombre:"Aventura - Angelito",
        musica: "Aventura - Angelito.mp3",
    },
    {
        imagen: "img/image3.jpg",
        nombre:"Hoja en Blanco - Monchy y Alexandra",
        musica: "Hoja en Blanco - Monchy y Alexandra.mp3",
    },
    {
        imagen: "img/image4.jpg",
        nombre:"Big Boy - Mis Ojos Lloran Por Ti (Lyrics)",
        musica: "Big Boy - Mis Ojos Lloran Por Ti (Lyrics).mp3",
    },
    {
        imagen: "img/image1.jpg",
        nombre:"Aventura - La Boda",
        musica: "Aventura - La Boda.mp3",
    },
    {
        imagen: "img/image2.jpg",
        nombre:"Aventura - Angelito",
        musica: "Aventura - Angelito.mp3",
    },
    {
        imagen: "img/image3.jpg",
        nombre:"Hoja en Blanco - Monchy y Alexandra",
        musica: "Hoja en Blanco - Monchy y Alexandra.mp3",
    },
    {
        imagen: "img/image4.jpg",
        nombre:"Big Boy - Mis Ojos Lloran Por Ti (Lyrics)",
        musica: "Big Boy - Mis Ojos Lloran Por Ti (Lyrics).mp3",
    },
    {
        imagen: "img/image1.jpg",
        nombre:"Aventura - La Boda",
        musica: "Aventura - La Boda.mp3",
    },
    {
        imagen: "img/image2.jpg",
        nombre:"Aventura - Angelito",
        musica: "Aventura - Angelito.mp3",
    },
    {
        imagen: "img/image3.jpg",
        nombre:"Hoja en Blanco - Monchy y Alexandra",
        musica: "Hoja en Blanco - Monchy y Alexandra.mp3",
    },
    {
        imagen: "img/image4.jpg",
        nombre:"Big Boy - Mis Ojos Lloran Por Ti (Lyrics)",
        musica: "Big Boy - Mis Ojos Lloran Por Ti (Lyrics).mp3",
    },
    {
        imagen: "img/image1.jpg",
        nombre:"Aventura - La Boda",
        musica: "Aventura - La Boda.mp3",
    },
    {
        imagen: "img/image2.jpg",
        nombre:"Aventura - Angelito",
        musica: "Aventura - Angelito.mp3",
    },
    {
        imagen: "img/image3.jpg",
        nombre:"Hoja en Blanco - Monchy y Alexandra",
        musica: "Hoja en Blanco - Monchy y Alexandra.mp3",
    },
    {
        imagen: "img/image4.jpg",
        nombre:"Big Boy - Mis Ojos Lloran Por Ti (Lyrics)",
        musica: "Big Boy - Mis Ojos Lloran Por Ti (Lyrics).mp3",
    },
    {
        imagen: "img/image1.jpg",
        nombre:"Aventura - La Boda",
        musica: "Aventura - La Boda.mp3",
    },
    {
        imagen: "img/image2.jpg",
        nombre:"Aventura - Angelito",
        musica: "Aventura - Angelito.mp3",
    },
    {
        imagen: "img/image3.jpg",
        nombre:"Hoja en Blanco - Monchy y Alexandra",
        musica: "Hoja en Blanco - Monchy y Alexandra.mp3",
    },
    {
        imagen: "img/image4.jpg",
        nombre:"Big Boy - Mis Ojos Lloran Por Ti (Lyrics)",
        musica: "Big Boy - Mis Ojos Lloran Por Ti (Lyrics).mp3",
    },
];

const insertar_datos = document.getElementById("musicas");
let contador = 1;
for (let index of datos_musica) {
    const numeroCeroRellenado = contador.toString().padStart(2, '0');
    insertar_datos.innerHTML += `
        <tr>
            <td class="numeroCeroRellenado">${numeroCeroRellenado}</td>
            <td><img src="${index.imagen}" alt="Portada de la cancións 1" width="50"></td>
            <td id="nombre_audio">${index.nombre}</td>
            <td>
                <p class="play-button"   class="musica_tabla" data-src="music/${index.musica}">
                    <svg fill="#ffffff" class="svg-tabla" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM10,8l6,4-6,4Z"> </path>
                        </g>
                    </svg>
                </p>
            </td>
        </tr>
`;
contador++;
}

