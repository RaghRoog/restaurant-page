import { naviBar } from './navi-bar.js'
let content = document.getElementById('content')
let mainContent = document.createElement('div')
mainContent.classList.add('main-content')
let informations = document.createElement('div')
informations.classList.add('informations')
let address = document.createElement('div')
address.innerHTML = `Come and taste our delicious food! <br>
Our address: <br>
76 US-183 Hwy, Goldthwaite, TX 76844, United States`
address.classList.add('address')

export let home = function(){
    naviBar()
    content.appendChild(mainContent)
    mainContent.appendChild(informations)
    informations.appendChild(address)
}

