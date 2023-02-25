// const animado = document.querySelector('.news-animado');
let animado = document.getElementById('text');

window.addEventListener("scroll", ()=>{
    let pantalla = window.innerHeight;
    let ubicacion = animado.getBoundingClientRect().top;
  
    console.log(pantalla ,ubicacion);
  
    if(ubicacion <= pantalla){
        animado.classList.add('anim-text');
        console.log('cambio de color?');
    }
})