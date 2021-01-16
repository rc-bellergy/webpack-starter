import _ from 'lodash'
import 'bootstrap'
import './style.scss'

document.getElementById('webpack-content').appendChild(component())

function component () {
    const element = document.createElement('div')
    const br = document.createElement('br')

    // Sample of using the imported module 'lodash'
    element.innerHTML = _.join(['<h1 class="fw-light">Webpack', 'Samples</h1>'], ' ')
    element.appendChild(br)

    // Sample of getting the environment mode
    element.innerHTML += 'We are in ' + process.env.NODE_ENV + ' mode.'
    element.appendChild(br)

    // Sample of Lazy load module
    // https://webpack.docschina.org/guides/lazy-loading/
    const button = document.createElement('button')
    element.appendChild(button)
    button.innerHTML = 'Click me to load the another js module.'
    button.onclick = e => import('./another').then(module => {
        const print = module.default
        print()
    })
    return element
}

// const cardsData = [0,1,2,3,4,5,6,7,8]
// const cardTmp = require('./views/blocks/card.ejs')
// const cardsHolder = document.getElementById('cards')
// cardsData.forEach(element => {
//     cardsHolder.innerHTML += cardTmp()
// });
