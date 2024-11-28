var teacher = 'kyle'

function ask(quesion) {
    console.log(teacher, quesion)
}

import ask from './workShop.mjs';
ask("This is export method");

import * as workShop from './workShop.mjs';
workShop.ask("This is 2nd export method");