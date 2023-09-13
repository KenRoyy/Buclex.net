let span = document.querySelector('#span-anim');
// let spanH3 = document.querySelector('#span-anim h3');

function removeid(spanId){
    window.addEventListener('scroll', ()=>{
        let pantalla = window.innerHeight;
        let ubicacion = spanId.getBoundingClientRect().top;

        console.log(pantalla, ubicacion);

        if(ubicacion <= pantalla){
            spanId.removeAttribute('id');
            console.log(spanId.getAttribute('id'));
            spanId.classList.add('anim_span');
        }
    })



}

removeid(span);
// removeid(spanH3);
