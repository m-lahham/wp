import $ from 'jquery';
import btn from './button'
import kitten from './kitten'
import m from './math';
import css from './style/global';
import {button1, button2} from './splitting/buttons';

var messages = require('./messages');

var content = () => {
    return `<p class='${css.box}'>${messages.hi} ${messages.name}, good morning!</p>
    <br>
    ${kitten}
    <br>
    ${m.multiply(3,6)}
    <br>
    <div id="container"></div>
    `;
}


$('div#app').append(content);
$('div#app').append(button1()).append(button2());




//if(module.hot){ // for accepting HMR (Hot Module Replacement)
if(DEVELOPMENT){ // for accepting HMR (Hot Module Replacement)
    module.hot.accept();
}