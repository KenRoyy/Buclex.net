// const animado = document.querySelector('.news-animado');
let animado = document.querySelector('#text');
let span_anim = document.querySelector('#span-anim');
let title_anim = document.querySelector('#span-anim h3');
 
console.log(title_anim);

function animText(animado,anim) {   
    window.addEventListener("scroll", ()=>{
        let pantalla = window.innerHeight;
        let ubicacion = animado.getBoundingClientRect().top;
        
        // console.log(pantalla ,ubicacion);
        
        if(ubicacion <= pantalla){
            // animado.classList.add('anim-text');
            animado.classList.add(anim)
            console.log('cambio de color?');
        }
    })
}

animText(animado,'anim-text')
animText(span_anim,'anim_span')
animText(title_anim, 'anim_span')


