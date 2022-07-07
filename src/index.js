import './style.css'
import './contact.css'
import './menu.css'
import { home } from './home.js'
import { contact } from './contact.js'
import { menu } from './menu.js'
console.log('webpack')
home()

let contactTab = document.querySelector('.contact')
contactTab.addEventListener('click', ()=>{
    content.innerHTML = ''
    contact()
})

let homeTab = document.querySelector('.home')
homeTab.addEventListener('click', ()=>{
    content.innerHTML = ''
    home()
})

let menuTab = document.querySelector('.menu')
menuTab.addEventListener('click', ()=>{
    content.innerHTML = ''
    menu()
})