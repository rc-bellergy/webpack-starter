import _ from 'lodash'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'

function component () {
    const element = document.getElementById('starter-template')
    const br = document.createElement('br')

    // Sample of using the imported module 'lodash'
    element.innerHTML = _.join(['<h1>Hello', 'Webpack!</h1>'], ' ')
    element.appendChild(br)

    // Sample of getting the environment mode
    element.innerHTML += 'We are in ' + process.env.NODE_ENV + ' mode.'
    element.appendChild(br)

    // Sample of Lazy load module
    // https://webpack.docschina.org/guides/lazy-loading/
    const button = document.createElement('button')
    element.appendChild(button)
    button.innerHTML = 'Click me to load the another js module.'
    button.onclick = e => import('./print').then(module => {
        const print = module.default
        print()
    })
    return element
}

document.body.appendChild(component())
