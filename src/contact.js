import { naviBar } from './navi-bar.js'
let content = document.getElementById('content')
let contactContainer = document.createElement('div')
contactContainer.classList.add('contact-container')
let container = document.createElement('div')
container.classList.add('container')
let leftSide = document.createElement('div')
leftSide.classList.add('left-side')
let contacts = document.createElement('div')
contacts.classList.add('contacts')
let messageContainer = document.createElement('div')
messageContainer.classList.add('message-container')
let rightSide = document.createElement('div')
rightSide.classList.add('right-side')
let message = document.createElement('div')
message.classList.add('message')
contacts.innerHTML = `Telephone number:<br> 111-222-3333 <br>
Email address:<br> something@otherthing.com <br>
Address:<br> 76 US-183 Hwy, Goldthwaite, TX 76844, United States`
let messageInput = document.createElement('textarea')
messageInput.setAttribute('placeholder', 'Book a table')
messageInput.classList.add('message-input')
let email = document.createElement('input')
email.classList.add('email')
email.setAttribute('type', 'email')
email.setAttribute('name', 'email')
email.setAttribute('placeholder', 'Your email address')
let submitButton = document.createElement('input')
submitButton.setAttribute('type', 'submit')
submitButton.classList.add('submit-button')
submitButton.innerHTML = 'Book'

export let contact = function (){ 
    naviBar() 
    content.appendChild(contactContainer)
    contactContainer.appendChild(container)
    container.appendChild(leftSide)
    leftSide.appendChild(contacts)
    container.appendChild(rightSide)
    rightSide.appendChild(message)
    message.appendChild(messageInput)
    message.appendChild(email)
    message.appendChild(submitButton)
}


