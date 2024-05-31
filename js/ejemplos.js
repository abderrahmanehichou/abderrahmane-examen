document.addEventListener("DOMContentLoaded", function() {
    const neumaticosImagen = document.querySelector('.nuematicos__imagen');
    const maderasImagen = document.querySelector('.maderas__imagen');
    const botellasImagen = document.querySelector('.botellas__imagen');

    neumaticosImagen.addEventListener('mouseover', function() {
        neumaticosImagen.src = '/img/nuematicos2.jpeg';
    });

    neumaticosImagen.addEventListener('mouseout', function() {
        neumaticosImagen.src = '/img/nuematicos.jpeg';
    });

    maderasImagen.addEventListener('mouseover', function() {
        maderasImagen.src = '/img/9.jpeg';
    });

    maderasImagen.addEventListener('mouseout', function() {
        maderasImagen.src = '/img/44.jpeg';
    });

    botellasImagen.addEventListener('mouseover', function() {
        botellasImagen.src = '/img/botellas1.jpeg';
    });

    botellasImagen.addEventListener('mouseout', function() {
        botellasImagen.src = '/img/botellas4.jpeg';
    });
});
