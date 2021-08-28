const navOpen = document.getElementById('nav-open')
const navMenu = document.getElementById('nav-menu')
const navClose = document.getElementById('nav-close')

const section=document.getElementById('section')

navOpen.addEventListener("click",()=>{
    navMenu.classList.add('show-menu')
    navOpen.classList.add('nun')
    section.style.padding='7rem 0 0 6rem';
})

navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
    navOpen.classList.remove('nun')
    section.style.padding='0 0 0 0';
    
})