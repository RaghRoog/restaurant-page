import { naviBar } from './navi-bar.js'
let content = document.getElementById('content')
let menuContainer = document.createElement('div')
menuContainer.classList.add('menu-container')

function createFood(name, src){
    let food = document.createElement('div')
    food.classList.add('food')
    food.style.backgroundImage = `url(${src})`

    let foodName = document.createElement('div')
    foodName.classList.add('food-name')
    foodName.innerHTML = name
    food.appendChild(foodName)
    return food
}
let foods = [
    createFood('Hamburger', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Homemade_burger.jpg/800px-Homemade_burger.jpg'),
    createFood('Pizza', 'https://fotokulinarnie.pl/wp-content/uploads/2021/02/IMG_4407-scaled.jpg?v=1612898493'),
    createFood('Ribs', 'https://www.onceuponachef.com/images/2022/06/baby-back-ribs-18.jpg'),
    createFood('Hot dog', 'https://szefsmaku.pl/wp-content/uploads/2020/05/hot-dog-930x530.jpg'),
    createFood('Spaghetti', 'https://szefpoleca.pl/wp-content/uploads/2021/10/najprostsze-spaghetti-bolognese-01-900x575.webp'),
    createFood('Bigos', 'https://blix.pl/gotuj/wp-content/uploads/2018/11/bigos-klasyczny.jpg')
]

export let menu = function (){
    naviBar()
    content.appendChild(menuContainer)
    foods.forEach((food)=>{
        menuContainer.appendChild(food)
    })
}