'use strict';

let counter = require('./reducer_counter');
import { createStore } from 'redux'

let store = createStore(counter)
let render = () => {
    document.body.innerText = store.getState() + "This is a render1"; 
}

store.subscribe(render)

document.addEventListener('click',()=>{
    store.dispatch({type: "INCREMENT"})
})