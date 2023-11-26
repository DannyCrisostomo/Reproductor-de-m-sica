const datos_musica = [
    {
        imagen: "img/image1.jpg",
        nombre:"boy",
        musica: "music1.mp3",
    },
    {
        imagen: "img/image2.jpg",
        nombre:"boy",
        musica: "music2.mp3",
    },
    {
        imagen: "img/image3.jpg",
        nombre:"boy",
        musica: "music3.mp3",
    },
    {
        imagen: "img/image4.jpg",
        nombre:"boy",
        musica: "music4.mp3",
    },
    {
        imagen: "img/image1.jpg",
        nombre:"boy",
        musica: "music1.mp3",
    },
    {
        imagen: "img/image2.jpg",
        nombre:"boy",
        musica: "music2.mp3",
    },
    {
        imagen: "img/image3.jpg",
        nombre:"boy",
        musica: "music3.mp3",
    },
    {
        imagen: "img/image4.jpg",
        nombre:"boy",
        musica: "music4.mp3",
    },
    {
        imagen: "img/image1.jpg",
        nombre:"boy",
        musica: "music1.mp3",
    },
    {
        imagen: "img/image2.jpg",
        nombre:"boy",
        musica: "music2.mp3",
    },
    {
        imagen: "img/image3.jpg",
        nombre:"boy",
        musica: "music3.mp3",
    },
    {
        imagen: "img/image4.jpg",
        nombre:"boy",
        musica: "music4.mp3",
    },
    {
        imagen: "img/image1.jpg",
        nombre:"boy",
        musica: "music1.mp3",
    },
    {
        imagen: "img/image2.jpg",
        nombre:"boy",
        musica: "music2.mp3",
    },
    {
        imagen: "img/image3.jpg",
        nombre:"boy",
        musica: "music3.mp3",
    },
    {
        imagen: "img/image4.jpg",
        nombre:"boy",
        musica: "music4.mp3",
    },
    {
        imagen: "img/image1.jpg",
        nombre:"boy",
        musica: "music1.mp3",
    },
    {
        imagen: "img/image2.jpg",
        nombre:"boy",
        musica: "music2.mp3",
    },
    {
        imagen: "img/image3.jpg",
        nombre:"boy",
        musica: "music3.mp3",
    },
    {
        imagen: "img/image4.jpg",
        nombre:"boy",
        musica: "music4.mp3",
    },
    {
        imagen: "img/image1.jpg",
        nombre:"boy",
        musica: "music1.mp3",
    },
    {
        imagen: "img/image2.jpg",
        nombre:"boy",
        musica: "music2.mp3",
    },
    {
        imagen: "img/image3.jpg",
        nombre:"boy",
        musica: "music3.mp3",
    },
    {
        imagen: "img/image4.jpg",
        nombre:"boy",
        musica: "music4.mp3",
    },
    {
        imagen: "img/image1.jpg",
        nombre:"boy",
        musica: "music1.mp3",
    },
    {
        imagen: "img/image2.jpg",
        nombre:"boy",
        musica: "music2.mp3",
    },
    {
        imagen: "img/image3.jpg",
        nombre:"boy",
        musica: "music3.mp3",
    },
    {
        imagen: "img/image4.jpg",
        nombre:"boy",
        musica: "music4.mp3",
    },
];

const insertar_datos = document.getElementById("musicas");
for (let index of datos_musica) {
    insertar_datos.innerHTML += `
        <tr>
            <td>01</td>
            <td><img src="${index.imagen}" alt="Portada de la cancións 1" width="50"></td>
            <td>${index.nombre}</td>
            <td>
                <p class="play-button" class="musica_tabla" data-src="music/${index.musica}">
                    <svg fill="#ffffff" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
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
}