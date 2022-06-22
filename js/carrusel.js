window.onload = function(){
    // Variables
    const imgCarrousel = [
        './img/productos/prod1.jpg',
        './img/productos/prod2.jpg',
        './img/productos/prod3.jpg',
        './img/productos/prod4.jpg',
        './img/productos/prod5.jpg',
        './img/productos/prod7.jpg',
        './img/productos/prod9.jpg',
        './img/productos/prod10.jpg',
        './img/productos/prod11.jpg',
        './img/productos/prod12.jpg',
        './img/productos/prod14.jpg',
        './img/productos/prod15.jpg',
        './img/productos/prod16.jpg',
        './img/productos/prod17.jpg',
        './img/productos/prod19.jpg',
        './img/productos/prod21.jpg',
        './img/productos/prod23.jpg',
        './img/productos/prod24.jpg',
        './img/productos/prod25.jpg',
        './img/productos/prod26.jpg',
        './img/productos/prod27.jpg',
        './img/productos/prod28.jpg',
        './img/productos/prod29.jpg',
        './img/productos/prod30.jpg',
        './img/productos/prod31.jpg',
        './img/productos/prod32.jpg',
        './img/productos/prod33.jpg',
        './img/productos/prod34.jpg',
        './img/productos/prod36.jpg',
        './img/productos/prod41.jpg',
        './img/productos/prod43.jpg',
        './img/productos/prod44.jpg',
        './img/productos/prod45.jpg',
        './img/productos/prod46.jpg',
        './img/productos/prod47.jpg',
    ];

    const time=5000;
    let posicionActual = 0;
    let $btnBack= document.querySelector('#btnBack');
    let $btnNext= document.querySelector('#btnNext');
    let $picture = document.querySelector('#pictures');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function nextPicture() {
        if(posicionActual >= imgCarrousel.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function backPicture() {
        if(posicionActual <= 0) {
            posicionActual = imgCarrousel.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $picture.style.backgroundImage = `url(${imgCarrousel[posicionActual]})`;
        $picture.style.backgroundSize = '900px';

    }

    // Eventos
    $btnBack.addEventListener('click', nextPicture);
    $btnNext.addEventListener('click', backPicture);
    // Iniciar
    intervalo = setInterval(nextPicture, time);
    
    renderizarImagen();
}