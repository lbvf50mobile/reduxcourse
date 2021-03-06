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
- `npm install -g expect`
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

- I added `Redux` to the our applications as a script tag from `cdnjs` and this is an `umd` build so it's exports a single global variable called `Redux` with the capital `R`.
- And in real applications I sugest you to use npm instead and module bunlder as like `webpack` or `browserfy` bu `umd` build will
survies for our example.
- I going to need just a single functions from `Redux` called **createStore**.
- I'm useing `ES6` destructuring syntax here. It's equivalent to write `var createStore = Redux.createStore`
- Or if you use `NPM` or something like `Babel` to transpile you `ES6` you can write `import { createStore } from 'redux'` (notice the parenthesis).
- The `Store` binds together the three pinciples of `Redux`
    - it holds the current applications state object
    - it lets you dispatch actions
    - and when you create it you need to specify a `Reducer`, that tells how `sate` is updated with `actions`.
- In this example we calling the `createStore` with `counter` as a `reducer` that manages the `state` updates.
- The store has 3 important methods:
- The first method of the store is called a `getState()` and it's retriews the current state of  the `Redux` store.
- if we run this we going to see `0` because this is an initial state of our application.
- The second and the most commonly used `Store` method is  called `dispatch()` and lets you dispatch `actions` to change the `state` of your application.
- If we log the `storeState` after `dispatch` we going to see that it has changed.
- Ofcourse always loging to the console becomes boring so we actually going to render something to the body now. 
- With the help of the third  `Redux store` method called `subscribe()`.
- It lets you register a callback that the `Redux Store` will call any time an actions has been dispatched.
- So that you can updated the UI of your application to refact the current application state.
- And I'm been very naive now, I'm not using `React` or anything. I'm just rendering the counter into the document body anytime the body is clicked I'm going to dispatch an action to increment this counter.
- Now if you pay close attention you will notice that the initial state the `0` is not rendered, and this is because I'm rendering insite the `subscribe` callback, but it dose not actually fired the very first time. 
- So I extract this loginc into the `render` method, I subscribe the redner method to the `store` and I also call it ones to reders inital state.
- Now it's renders the zero and the click is increment the counter.
- And this is our first working `Redux` application.
- ![Redux Store: getState(), dispatch(), subsribe();](scans/reduxstore.jpg?raw=true "Redux Store: getState(), dispatch(), subsribe();")

## [Redux: Implementing Store from Scratch](https://egghead.io/lessons/react-redux-implementing-store-from-scratch)
- In the previeous vidoe we looked how to implement a simple counter example using the `createStore` function provided by `Redux`. 
- And the `store` object it's returns that privides the `getState` method to get the current application state, the `dispatch` method to change the current application state by dispatching an action, and `subscribe` method to describe to the changes and rerender our application with a current state of the app. 
- If you like me you prefer to understand the tools that you are using. So in this tutorial we going to reiomplemnt the CreateStore function provided by Redux from Scratch.
- The first and the only that we know so far argument to the createStore function is a `reducer` function provided by the application.
- And we know that the `store` holds current state. So we keep it in a variable.
- And the `getState` funciton going to return the curren value of that variable.
- This function combined with a `dispatch` function, and the `subscribe` function on a single object that we call a `ReduxStore` 
- Because the subscribe funciton can be called many times we need to keep track of all the change listeners.
- And every time it's called we need to push a listener in the array.
- Dispatching an action is an only way to change the internal state.
- And in order to calculate a new state we call a `reducer` with a current state and the `action` been dispatch.
- And after the `state` was updated we need to notify every change linstener by calling it.
- There is an important missing peace here. We have not provided a way to unsubscribe a listener.
- But instead of adding a dedicated unsubscribe method, we will just return a function from the `subscribe` method, that return this listener from the `listeners` array. 
- Finally by the time the `store` is returned we wanted to have the initial state populated. So we going to dispatch the dummy action just to get the `reducer` to return an initial value.
- This implementation of `Redux Store` appart a view minor details and endge cases is a `Redux Store` that shiped with `Redux`.

## [Redux: React counter example](https://egghead.io/lessons/react-redux-react-counter-example)
- In this simplest counter example I update a document body manually any time the `store.getState()` changes.
- But ofcourse this uproach dose not scales for coplex applications.
- So instead of manually updating the DOM I'm going to use React.
- I'm addubg two scripts in  the Head correcpoding to `React` and `React DOM` packages. And the `root` div to reder to it.
- Now I can cal `ReactDOM.render` with my `Root` component.
- The render dunction is called any time the store is changes. So I can savely pass the current state of the store as a prop to my root component.
- Since the change is held in React store, the `Counter` component could be a simple function. Which is a supported way of declaring components since React 14.
- Now I want to add increment and decrement buttons to the component, but I do not want to hardcode a redux dependency to the component.
- I just add onIncrement and onDecrement props as callbacks, and in my reder method I'll pass the callbacks that calls `store.dispatch`  appropriate actions.
- Now applicatins state is updated when I click a buttions.
- Now Let's recap how this appliction works.
- The counter component is what I call a `dump` component. It dose not contain any business logic.
- It's only specify how current application state transofms into the rederable output.
- And how the callbacks passed via props are bound to the even hanlder.
- When we render a counter we specify that it's value shuld be taken from the Redux Store Current state.
- And when the user press `increment` or `decrement` we dispatch corresponding action to the redux store.
- Our reducer specifiyes how the next state is calculated based on the current state and the action been dispatch.
- And finally we subscibe to the redux store so our reder function runs the any time the state changes so the counter gets the current state.

## [Redux: Avoiding Array Mutations with concat(), slice(), and ...spread](https://egghead.io/lessons/react-redux-avoiding-array-mutations-with-concat-slice-and-spread)

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
- [Webpack: 2.3: Simple pack - rebuild on changes](https://youtu.be/85zatjhaOkE)
- [Webpack: 2.4: Simple pack - Source map](https://youtu.be/v9gtHkynU5E)
- [Webpack: 2.5: Simple pack - Environment, NODE_ENV](https://youtu.be/5XZqeuWkQ4o)
- [Webpack: 2.6: Simple pack - Babel JS](https://youtu.be/J-Q7PcfyiGU)
- [Webpack: 2.7: Simple pack - Resolving](https://youtu.be/vkK-h1bgUIE)
- [Webpack: 2.8: Simple pack - Minification](https://youtu.be/ZLrzAhhbt6s)
- [Webpack: 3.1: Several scripts - Several Entry points](https://youtu.be/JYP0e7uwgG0)

# [Adding react](https://maxfarseer.gitbooks.io/react-course-ru/content/podklyuchaem_react.html)