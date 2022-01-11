import { useState } from 'react'
import { Button } from 'react-bootstrap'

// RULES OF HOOKS
// 1) YOU CAN USE REACT HOOKS JUST IN REACT FUNCTIONAL COMPONENTS!
// 2) YOU HAVE TO USE REACT HOOKS AT THE TOP LEVEL OF YOUR COMPONENT!
// (this is for mantaining the same invokation order every single time the component re-renders)

// state = {
//   counter: 0,
//   show: true
// }

const UseStateComponent = () => {
    const [counter, setCounter] = useState(0)
    const [show, setShow] = useState(true)

    // counter is the state variable, it will remember a value over time
    // setCounter is a function, capable of assigning a new value to counter
    // (just like setState in a Class Component, but which works JUST for counter)
    // the argument you're invoking useState with is going to be the initial value for the state variable
    // useState() is a function returning always an array of 2 elements, and with the
    // destructuring syntax you can give a name to them
    // the second element (the setter function) will be named like 'setXXX'

    // the only difference between setState (from a class component) and a setter function from useState
    // is this: setState MERGES the object you pass to it in the component's state
    // these setter functions REPLACES the value

    return (
        <div className='App-header'>
            <div className='d-flex flex-column mb-3 align-items-center'>
                <Button onClick={() => setCounter(counter + 1)}>+</Button>
                <h1>{counter}</h1>
                <Button onClick={() => setCounter(counter - 1)}>-</Button>
            </div>
            <div className='d-flex flex-column mb-3 align-items-center'>
                <Button onClick={() => setShow(!show)}>{show ? 'HIDE' : 'SHOW'}</Button>
                {show && <h2>SECRET MESSAGE</h2>}
            </div>
        </div>
    )
}

export default UseStateComponent
