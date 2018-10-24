'use strict';

let counter = require('./reducer_counter');
import { createStore } from 'redux'

let store = createStore(counter)
store.subscribe(()=>{
   document.body.innerText = store.getState(); 
})

document.addEventListener('click',()=>{
    store.dispatch({type: "INCREMENT"})
})