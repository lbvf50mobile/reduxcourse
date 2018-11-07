'use strict';

// https://www.npmjs.com/package/react-dom
// https://www.npmjs.com/package/react
// https://github.com/mapbox/node-sqlite3/issues/968#issuecomment-399702443
// https://stackoverflow.com/questions/49370849/configuration-module-has-an-unknown-property-loaders
let counter = require('./reducer_counter');
var React = require('react');
var ReactDOM = require('react-dom')
import { createStore } from 'redux'

console.log(React)
console.log(ReactDOM)

//const Counter = () =>(<h1>Test/h1>);

let store = createStore(counter)
let render = () => {
    document.body.innerText = store.getState(); 
}

store.subscribe(render)

document.addEventListener('click',()=>{
    store.dispatch({type: "INCREMENT"})
})

ReactDOM.render(<h1>Test</h1>,document.getElementById('root'))