import _ from 'lodash'
import { Carousel } from 'bootstrap'
import './style.scss'
import Home01 from './images/home01.jpg'
import Home02 from './images/home02.jpg'
import Home03 from './images/home03.jpg'
import Home04 from './images/home04.jpg'

// Sample of create bootstrap component 
const items = [{
    src: Home01,
    active: 'active'
}, {
    src: Home02,
    active: ''
}, {
    src: Home03,
    active: ''
}, {
    src: Home04,
    active: ''
},]
const template = require('../templates/carousel.ejs')
const holder = document.querySelector('#CarouselHolder .carousel-inner')
items.forEach((item) => {
    holder.innerHTML += template({ item: item })
})
const myCarousel = document.querySelector('#CarouselHolder')
const carousel = new Carousel(myCarousel)

// Sample of getting the environment mode
const br = document.createElement('br')
const holder2 = document.getElementById('AnotherHolder')
holder2.innerHTML += 'We are in ' + process.env.NODE_ENV + ' mode.'
holder2.appendChild(br)

// Sample of Lazy load module
// https://webpack.docschina.org/guides/lazy-loading/
const button = document.createElement('button')
button.innerHTML = 'Click me to load the another js module.'
button.onclick = e => import('./another').then(module => {
    const print = module.default
    print()
})
holder2.appendChild(button)
