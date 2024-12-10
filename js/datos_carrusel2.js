const datos_carrusel2 = [
    {
        imagen: "img/image1.jpg",
        cantante: "Aventura",
    },
    {
        imagen: "img/image2.jpg",
        cantante: "Monchy y Alexandra",
    },
    {
        imagen: "img/image3.jpg",
        cantante: "Big Boy",
    },
    {
        imagen: "img/image1.jpg",
        cantante: "Aventura",
    },
    {
        imagen: "img/image2.jpg",
        cantante: "Monchy y Alexandra",
    },
    {
        imagen: "img/image3.jpg",
        cantante: "Big Boy",
    },
    {
        imagen: "img/image1.jpg",
        cantante: "Aventura",
    },
    {
        imagen: "img/image2.jpg",
        cantante: "Monchy y Alexandra",
    },
    {
        imagen: "img/image3.jpg",
        cantante: "Big Boy",
    },
    {
        imagen: "img/image1.jpg",
        cantante: "Aventura",
    },
    {
        imagen: "img/image2.jpg",
        cantante: "Monchy y Alexandra",
    },
    {
        imagen: "img/image3.jpg",
        cantante: "Big Boy",
    },
    {
        imagen: "img/image1.jpg",
        cantante: "Aventura",
    },
    {
        imagen: "img/image2.jpg",
        cantante: "Monchy y Alexandra",
    },
    {
        imagen: "img/image3.jpg",
        cantante: "Big Boy",
    },
    {
        imagen: "img/image1.jpg",
        cantante: "Aventura",
    },
    {
        imagen: "img/image2.jpg",
        cantante: "Monchy y Alexandra",
    },
    {
        imagen: "img/image3.jpg",
        cantante: "Big Boy",
    },
    {
        imagen: "img/image1.jpg",
        cantante: "Aventura",
    },
    {
        imagen: "img/image2.jpg",
        cantante: "Monchy y Alexandra",
    },
    {
        imagen: "img/image3.jpg",
        cantante: "Big Boy",
    },
    {
        imagen: "img/image1.jpg",
        cantante: "Aventura",
    },
    {
        imagen: "img/image2.jpg",
        cantante: "Monchy y Alexandra",
    },
    {
        imagen: "img/image3.jpg",
        cantante: "Big Boy",
    },
    {
        imagen: "img/image1.jpg",
        cantante: "Aventura",
    },
    {
        imagen: "img/image2.jpg",
        cantante: "Monchy y Alexandra",
    },
    {
        imagen: "img/image3.jpg",
        cantante: "Big Boy",
    },
    {
        imagen: "img/image1.jpg",
        cantante: "Aventura",
    },
    {
        imagen: "img/image2.jpg",
        cantante: "Monchy y Alexandra",
    },
    {
        imagen: "img/image3.jpg",
        cantante: "Big Boy",
    },
    {
        imagen: "img/image1.jpg",
        cantante: "Aventura",
    },
    {
        imagen: "img/image2.jpg",
        cantante: "Monchy y Alexandra",
    },
    {
        imagen: "img/image3.jpg",
        cantante: "Big Boy",
    },
    {
        imagen: "img/image1.jpg",
        cantante: "Aventura",
    },
    {
        imagen: "img/image2.jpg",
        cantante: "Monchy y Alexandra",
    },
    {
        imagen: "img/image3.jpg",
        cantante: "Big Boy",
    },
    {
        imagen: "img/image1.jpg",
        cantante: "Aventura",
    },
    {
        imagen: "img/image2.jpg",
        cantante: "Monchy y Alexandra",
    },
];

const insertar_carrusel2 = document.getElementById("carrusel2");
for (let index of datos_carrusel2 ) {
    insertar_carrusel2.innerHTML += `
    <div class="carousel-item2">
        <img src="${index.imagen}" alt="Imagen 1" loading="lazy">
        <p>${index.cantante}</p>
    </div>
`;
}
