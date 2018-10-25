'use strict';

let counter = require('./reducer_counter');
import { createStore } from 'redux'
//---------------------------------------------
// CreateStore self implementation
//---------------------------------------------
const createStore1 = (reducer) =>{
    let state;
    let listeners = [];
    const getState = () => state;

    const dispatch = (action) =>{
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    }

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter( l => l !== listener);
        };
    }

    dispatch({});

    return {getState, dispatch, subscribe};
}

//---------------------------------------------

let store = createStore1(counter)
let render = () => {
    document.body.innerText = store.getState(); 
}

store.subscribe(render)

document.addEventListener('click',()=>{
    store.dispatch({type: "INCREMENT"})
})