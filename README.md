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


# [Russian WebPack](http://learn.javascript.ru/screencast/webpack)
- [Webpack 1: intro](https://youtu.be/kLMjOd-x0aQ)
- [Webpack 2.1: Simple pack smiple config](https://youtu.be/DJSZKf9GkUs)
    - [Node js reqire](https://www.w3schools.com/nodejs/nodejs_modules.asp)
    - [Understangin module.expmorts and exprots in Node.js](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)
    - [Understanding JavaScript Modules: Bundling & Transpiling](https://www.sitepoint.com/javascript-modules-bundling-transpiling/)



# [Adding react](https://maxfarseer.gitbooks.io/react-course-ru/content/podklyuchaem_react.html)