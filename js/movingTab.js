window.onload = () =>{
    let home = document.querySelectorAll('#home');
    let conoce = document.querySelectorAll('#conoce');
    let store = document.querySelectorAll('#sore');
    let opinion = document.querySelectorAll('#opinion');
    let contact = document.querySelectorAll('#contact');
    let btn = document.querySelectorAll('#up');

    
    btn.addEventListener('click', () => {
        scrollSuave('#section1', 500, 10)
    })

    
    home.addEventListener('click', () => {
        scrollSuave('#section1', 500, 10)
    })

    
    conoce.addEventListener('click', () => {
        scrollSuave('#section2', 500, 10)
    })

    
   store.addEventListener('click', () => {
        scrollSuave('#section3', 500, 10)
    })

    
    opnion.addEventListener('click', () => {
        scrollSuave('#section4', 500, 10)
    })

    contact.addEventListener('click', () => {
        scrollSuave('#section5', 500, 10)
    })

}

const scrollSuave =(objetivo, duracion, compensacion) => {
    let elemObj = document.querySelector(objetivo)
    let elemPos = elemObj.getBoundingClientRect().top - compensacion
    let posInicial = window.pageYOffset
    let tiempoInicial = null
    const animacion = tiempoAhora => {
        if(tiempoInicial === null) tiempoInicial = tiempoAhora
        let tiempoPasado = tiempoAhora - tiempoInicial
        let auxAnimacion = easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion)
        window.scroll(0, auxAnimacion)
        if(tiempoPasado < duracion) requestAnimationFrame(animacion);  

    }
    requestAnimationFrame(animacion);  
}

const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return - c / 2 * (t * (t - 2) - 1) + b
  }