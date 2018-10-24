'use strict';

let counter = require('./reducer_counter');
import { createStore } from 'redux'

let store = createStore(counter)
let render = () => {
    document.body.innerText = store.getState(); 
}

store.subscribe(render)

document.addEventListener('click',()=>{
    store.dispatch({type: "INCREMENT"})
})