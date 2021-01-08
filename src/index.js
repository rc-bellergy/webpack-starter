import _ from 'lodash';
import './style.scss';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Michael!'], ' ');
    return element;
}

document.body.appendChild(component());
