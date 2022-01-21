const powerbutton = document.getElementById('closed');
const change = document.getElementById("front-second");
powerbutton.addEventListener('click', () =>{
    change.classList.toggle('opened');
    
});