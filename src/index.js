import $ from 'jquery';
import btn from './button'
import kitten from './kitten'
import m from './math';
import css from './style/global';
var messages = require('./messages');

var content = () => {
    return `<p class='${css.box}'>${messages.hi} ${messages.name}, good morning!</p>
    <br>
    ${kitten}
    <br>
    ${m.multiply(3,6)}
    `;
}

$('div#app').html(content);




//if(module.hot){ // for accepting HMR (Hot Module Replacement)
if(DEVELOPMENT){ // for accepting HMR (Hot Module Replacement)
    module.hot.accept();
}