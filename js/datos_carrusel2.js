const datos_carrusel2 = [
    {
        imagen: "img/image1.jpg",
    },
    {
        imagen: "img/image2.jpg",
    },
    {
        imagen: "img/image3.jpg",
    },
    {
        imagen: "img/image1.jpg",
    },
    {
        imagen: "img/image2.jpg",
    },
    {
        imagen: "img/image3.jpg",
    },
    {
        imagen: "img/image1.jpg",
    },
    {
        imagen: "img/image2.jpg",
    },
    {
        imagen: "img/image3.jpg",
    },
    {
        imagen: "img/image1.jpg",
    },
    {
        imagen: "img/image2.jpg",
    },
    {
        imagen: "img/image3.jpg",
    },
    {
        imagen: "img/image1.jpg",
    },
    {
        imagen: "img/image2.jpg",
    },
    {
        imagen: "img/image3.jpg",
    },
    {
        imagen: "img/image1.jpg",
    },
    {
        imagen: "img/image2.jpg",
    },
    {
        imagen: "img/image3.jpg",
    },
    {
        imagen: "img/image1.jpg",
    },
    {
        imagen: "img/image2.jpg",
    },
    {
        imagen: "img/image3.jpg",
    },
    {
        imagen: "img/image1.jpg",
    },
    {
        imagen: "img/image2.jpg",
    },
    {
        imagen: "img/image3.jpg",
    },
    {
        imagen: "img/image1.jpg",
    },
    {
        imagen: "img/image2.jpg",
    },
    {
        imagen: "img/image3.jpg",
    },
    {
        imagen: "img/image1.jpg",
    },
    {
        imagen: "img/image2.jpg",
    },
    {
        imagen: "img/image3.jpg",
    },
    {
        imagen: "img/image1.jpg",
    },
    {
        imagen: "img/image2.jpg",
    },
    {
        imagen: "img/image3.jpg",
    },
    {
        imagen: "img/image1.jpg",
    },
    {
        imagen: "img/image2.jpg",
    },
    {
        imagen: "img/image3.jpg",
    },
    {
        imagen: "img/image1.jpg",
    },
    {
        imagen: "img/image2.jpg",
    },
];

const insertar_carrusel2 = document.getElementById("carrusel2");
for (let index of datos_carrusel2 ) {
    insertar_carrusel2.innerHTML += `
    <div class="carousel-item2">
        <img src="${index.imagen}" alt="Imagen 1">
    </div>
`;
}