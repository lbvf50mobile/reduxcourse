'use strict';

// https://www.npmjs.com/package/react-dom
// https://www.npmjs.com/package/react
// https://github.com/mapbox/node-sqlite3/issues/968#issuecomment-399702443
// https://stackoverflow.com/questions/49370849/configuration-module-has-an-unknown-property-loaders
let counter = require('./reducer_counter');
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'


// https://www.valentinog.com/blog/react-webpack-babel/#How_to_set_up_React_webpack_and_Babel_setting_up_Babel
// https://docs.npmjs.com/misc/scope
// https://stackoverflow.com/questions/46664182/react-saids-minified-react-error-even-it-is-development-mode
// https://stackoverflow.com/questions/47161515/react-uncaught-error-target-container-is-not-a-dom-element
ReactDOM.render(<h1>Test</h1>,document.getElementById('root'))