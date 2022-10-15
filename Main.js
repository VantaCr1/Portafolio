const button1 = document.querySelector('.button1')
const links = document.querySelector('.links')

button1.addEventListener('click', () =>{
    button1.classList.toggle("rotate")
    links.classList.toggle("active")
})