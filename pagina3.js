let currentIndex = 0; // Índice actual de las imágenes que se están mostrando
const images = document.getElementById('imageContainer'); // Obtiene el contenedor de imágenes
const totalImages = document.querySelectorAll('.image').length; // Cuenta el total de imágenes

function moveSlide(direction) {
    currentIndex += direction * 2; // Mueve el índice actual 3 imágenes hacia adelante o hacia atrás
    if (currentIndex < 0) {
        currentIndex = 0; // No permite que el índice sea menor que 0
    } else if (currentIndex > totalImages - 3) {
        currentIndex = totalImages - 3; // No permite que el índice exceda el número de imágenes
    }
    images.style.transform = ` translateX(-${(currentIndex / totalImages) * 100}%)`; // Mueve el contenedor de imágenes
}