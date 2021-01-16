import _ from 'lodash'
import { Carousel } from 'bootstrap'
import './style.scss'
import Home01 from './images/home01.jpg'
import Home02 from './images/home02.jpg'
import Home03 from './images/home03.jpg'
import Home04 from './images/home04.jpg'

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