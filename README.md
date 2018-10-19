# [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)
## [Redux: The Single Immutable state Tree](https://egghead.io/lessons/react-redux-the-single-immutable-state-tree)
- Everyting that changes in your application including the data and UI state is contained in singe object we call it `state` or `the state tree`.
## [Redux: Describing State Changes with Actions](https://egghead.io/lessons/react-redux-describing-state-changes-with-actions)
- The `the state tree` is readonly. Any changes added by dispetcher by action.
## [Redux: Pure and Impure Functions](https://egghead.io/lessons/react-redux-pure-and-impure-functions)
- The `pure` functions are the functions that's returns value depends only on their arguments.
- The `pure` functions do not have any observable side effects: such as network or database calls.
- The `pure` functions just calculate a new value, you can be confident if you call `pure` functions with the same set of agruemnts you going to get the same return value.
- The `pure` functions do not modify the values passed to them.
- At the opposite the `impure` functions may call the database or the networks, they may have side effects they may opperate on the DOM, and they override the values you have past to them.
- Some of the functions you going to write on `Redux` have to be pure.
## [Redux: The Reducer Function](https://egghead.io/lessons/react-redux-the-reducer-function)
- YOu might have heard that you UI or a ViewLayer is most predictable when it's just described as `pure functions` of the aplication state.
- This approach was pioneered by by `React` but now it's been picked up by other frameworks such as `Ebber` and `Angular`.
- `Redux` compliments this approach with another IDEA: That the state mutation in you app need to be described as a `pure function` that takes the previous `state` and the `action` been dispatch and return the next `state` of your application.
- Inside any `Redux` application there is a one particular `function` that takes the `state` of the all applications and the `action` that been dispatched and returns the `next` state of the all application.
- It is important it dose not modify the state given to it, it has to be `pure` and it has to return a new `object`.
- Even in Large applications there is still just a single function that manages how the next state is calculated based on previous state of the application and the action been dispatched.
- It is not has to be slow, for example if I change the visibility filter I need to create a new object for the all state but I can keep a reference to the previous version of todo's array because it has now change when I change the visibility filter. this is what makes `Redux` fast.
- Now you know the third and the last priciple of `Redux`: **To describe safe mutations you have to write a function that takes a previous state of the app, the action been dispatched, and returns the next state of the app. And this function has to be pure. This function is called a REDUSER**

## [Redux: Writing a Counter Reducer with Tests](https://egghead.io/lessons/react-redux-writing-a-counter-reducer-with-tests)
- [Michael Jackson expect lib used in course](https://github.com/mjackson/expect)
- The frist functin we going to write is a `reducer` for the counter example.
- And `reducer` exepts `state` and `action` as arguments. And returns the `next state`.
- But before we shall jump into implementation we going to make cirtain assertions. Using Michel Jeackson expect library.
- We going assert that when the state of the counter is `zero` and you pass an increment action it should return `one`.
- And similarly it should return `two` when the state is `one` and you `increment`.
- We going to add a couple of test that tests how `decrement` works, which is decrements from 2 to 1 and from 1 to 0.
- And we going to add log to tell if our test are successfull.
- So if we are on this tests they are actually going to fail because we have not even began to implement how reducer works.
- We going to start by checing the action type.
- And if the checking type is increment we going to return `state + 1`, but if it's a decrement we going to return `state - 1`
- If you run the test we will find that this is enough to get them to pass.
- How ever there still some falls in our current implementation, of the counter `reducer`.
- For example I think that: If we dispatch an action that it is not understand it should return a current state of application. 
- However if we check for that we will see that this test fails because we currently do no handle unknown actin.
- So I going to add an `else` clause that return the current state.
- And the test pass now.
- Another issues is that while the `reducer` is incontroll of application state currenlty it is not specify an initiall state.
- I case of counter example it would be 0.
- The convention we used in `redux`: if the `reducer` recieves the `undefined` as the state argument it must return what it's consideres to be `initial state` of the application.
- And in this case it would be 0.
- Now come a few cosmetic tweaks.
- I will replace a bunch of `if` with `switch` statement.
- And I going to replace this condition with  `ES6` defalut argument (wich looks better.)
- I'm also going to replace the `function` declaration with an `arrow function` wich has clearer semantics in `ES6`.


## [Redux: Store Methods: getState(), dispatch(), and subscribe()](https://egghead.io/lessons/react-redux-store-methods-getstate-dispatch-and-subscribe)


# [Russian WebPack](http://learn.javascript.ru/screencast/webpack)
- [Webpack 1: intro](https://youtu.be/kLMjOd-x0aQ)
- [Webpack 2.1: Simple pack smiple config](https://youtu.be/DJSZKf9GkUs)
    - [Node js reqire](https://www.w3schools.com/nodejs/nodejs_modules.asp)
    - [Understangin module.expmorts and exprots in Node.js](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)
    - [Understanding JavaScript Modules: Bundling & Transpiling](https://www.sitepoint.com/javascript-modules-bundling-transpiling/)
    - https://github.com/webpack/webpack-cli/issues/230
    - [Remove wepback minimization](https://github.com/webpack/webpack/issues/6619)
    - ![Shcheme of this 2.1 module](scans/webpack2_1.jpg?raw=true "Shcheme of this 2.1 module")
- [Webpack: 2.2: Simple pack external access to modules](https://youtu.be/AUS-QEp4NUo)
    - [output.library](https://webpack.js.org/configuration/output/#output-library)



# [Adding react](https://maxfarseer.gitbooks.io/react-course-ru/content/podklyuchaem_react.html)