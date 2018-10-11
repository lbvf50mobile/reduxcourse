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
