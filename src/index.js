import _ from 'lodash';
import './style.scss';

function component () {
    const element = document.createElement('div')
    const br = document.createElement('br')

    // Sample of using the imported module 'lodash'
    element.innerHTML = _.join(['Hello', 'Webpack!'], ' ')
    element.appendChild(br)

    // Sample of getting the environment mode
    element.innerHTML += 'We are in ' + process.env.NODE_ENV + ' mode.'
    element.appendChild(br)

    // Sample of Lazy load module
    // https://webpack.docschina.org/guides/lazy-loading/
    const button = document.createElement('button')
    element.appendChild(button)
    button.innerHTML = 'Click me to load the print module.'
    button.onclick = e => import('./print').then(module => {
        const print = module.default
        print()
    })
    return element
}

document.body.appendChild(component())
