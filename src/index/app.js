import _ from 'lodash'
import './style.scss'

// Sample of Lazy load module
// https://webpack.docschina.org/guides/lazy-loading/
const button = document.createElement('button')
button.innerHTML = 'Click me to load the another js module.'
button.onclick = e => import('./another').then(module => {
    const print = module.default
    print()
})
document.body.appendChild(button)
