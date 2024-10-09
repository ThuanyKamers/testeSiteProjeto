// Trocar imagem no card
document.querySelectorAll('.trocar-imagem').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.src = img.getAttribute('data-hover');
    });
    img.addEventListener('mouseout', () => {
        img.src = img.src.replace('_costas', '_frente');
    });
});

// Slideshow na home
let currentIndex = 0;
const images = ['imagem1.jpg', 'imagem2.jpg', 'imagem3.jpg']; // Adicione os nomes das imagens aqui
const slideshow = document.getElementById('slideshow');

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.src = images[currentIndex];
}, 4000);
