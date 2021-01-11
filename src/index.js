import _ from 'lodash';
import './style.scss';

function component () {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Michael!'], ' ');
    element.innerHTML += '<br> We are in ' + process.env.NODE_ENV + ' mode.';
    return element;
}

document.body.appendChild(component());
