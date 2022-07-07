let content = document.getElementById('content')
let header = document.createElement('div')
header.classList.add('header')
let restaurantName = document.createElement('div')
restaurantName.innerHTML = 'No-Name Restaurant'
restaurantName.classList.add('name')
let tabs = document.createElement('div')
tabs.classList.add('tabs')
let homeTab = document.createElement('div')
homeTab.innerHTML = 'HOME'
homeTab.classList.add('home', 'tab')
let menuTab = document.createElement('div')
menuTab.innerHTML = 'MENU'
menuTab.classList.add('menu', 'tab')
let contactTab = document.createElement('div')
contactTab.innerHTML = 'CONTACT'
contactTab.classList.add('contact', 'tab')

export let naviBar = function (){  
    content.appendChild(header)
    header.appendChild(restaurantName)
    header.appendChild(tabs)
    tabs.append(homeTab, menuTab, contactTab)
    console.log('navi bar')
}