// const animado = document.querySelector('.news-animado');
let animado = document.querySelector('#text');
let bloke1 = document.querySelector('.bloke-1');
let bloke2 = document.querySelector('.bloke-1:nth-child(2)');
let bloke3 = document.querySelector('.bloke-1:nth-child(3)');


function anim(animado,anim) {   
    window.addEventListener("scroll", ()=>{
        let pantalla = window.innerHeight;
        let ubicacion = animado.getBoundingClientRect().top;
        
        if(ubicacion <= pantalla){
            // animado.classList.add('anim-text');
            animado.classList.add(anim);
        }
    })
}

anim(animado,'anim-text');
anim(bloke1,'start');
anim(bloke2,'start');
anim(bloke3,'start');