'use strict';

let counter = require('./reducer_counter');
import { createStore } from 'redux'

let store = createStore(counter)
console.log(store.getState(),"this is getState")
store.dispatch({type: 'INCREMENT'})
console.log(store.getState(),"this is getState after dispatch")