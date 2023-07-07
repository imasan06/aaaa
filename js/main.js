let listElements = document.querySelectorAll('.list__button--click');
let links = document.querySelectorAll('.nav__link');
// IFRAME
const view = document.getElementById("view");
console.log(view)
console.log(links)
let arrayLinks = [...links];
for (const iterator of arrayLinks) {
    iterator.addEventListener('click',(e)=> {
        e.preventDefault();
        let url = iterator.getAttribute('href'); // Obtén la URL del enlace
        view.setAttribute('src', url); 
    })
}

// view.setAttribute("src",)
listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        listElement.classList.toggle('arrow');

        let height = 0;
        
        let menu = listElement.nextElementSibling;

        if(menu.clientHeight==0){
            height=menu.scrollHeight;
        }

        menu.style.height = height+"px";
    })

    
});


const btntogle = document.querySelector('.togle-btn');

btntogle.addEventListener('click', function(){
    document.getElementById('nav').classList.toggle('nav__side_move');
})

const contenidotogle = document.querySelector('.togle-btn');

btntogle.addEventListener('click', function(){
    document.getElementById('contenido').classList.toggle('contenido-display');
})




