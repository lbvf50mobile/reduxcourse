// Redux: Writing a Counter Reducer with Tests
// https://egghead.io/lessons/react-redux-writing-a-counter-reducer-with-tests

var expect = require('expect')
var createSpy = expect.createSpy
var spyOn = expect.spyOn
var isSpy = expect.isSpy



expect(1).toBe(1, "1 is 1")
console.log("it works")

const counter =  (state, action) => {
    if('undefined' == typeof state) return 0
    if('INCREMENT' == action.type) return state + 1
    if('DECREMENT' == action.type) return state - 1
    return state;
}

expect(
    counter(0,{type:  'INCREMENT'})
).toEqual(1)

expect(
    counter(1,{type:  'INCREMENT'})
).toEqual(2)

expect(
    counter(2,{type:  'DECREMENT'})
).toEqual(1)

expect(
    counter(1,{type:  'DECREMENT'})
).toEqual(0)

expect(
    counter(1,{type:  'SOMETHINGELSE'})
).toEqual(1)

expect(
    counter(undefined,{})
).toEqual(0)

console.log('Tests Passed!')