
document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#myCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        wrap: true
    });

    // Pausar el carrusel cuando el mouse está sobre él
    myCarousel.addEventListener('mouseover', function () {
        carousel.pause();
    });

    // Reanudar el carrusel cuando el mouse deja el carrusel
    myCarousel.addEventListener('mouseout', function () {
        carousel.cycle();
    });
});

function showHide(){
    var container = document.getElementsByClassName("container")][0];
    if(container.style.visibility == "hidden"){
        container.style.visibility == "hidden";
    }else{
        container.style.visibility == "hidden";
    }

}