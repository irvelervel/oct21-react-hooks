import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

// RULES OF HOOKS
// 1) YOU CAN USE REACT HOOKS JUST IN REACT FUNCTIONAL COMPONENTS!
// 2) YOU HAVE TO USE REACT HOOKS AT THE TOP LEVEL OF YOUR COMPONENT!

// state = {
//   counter: 0,
//   show: true
// }

const App = () => {
  // if (5 < 10) {
  const [counter, setCounter] = useState(0)
  const [show, setShow] = useState(true)
  // }
  // counter is the state variable, it will remember a value over time
  // setCounter is a function, capable of assigning a new value to counter
  // (just like setState in a Class Component, but which works JUST for counter)
  // the argument you're invoking useState with is going to be the initial value for the state variable
  // useState() is a function returning always an array of 2 elements, and with the
  // destructuring syntax you can give a name to them
  // the second element (the setter function) will be named like 'setXXX'

  return (
    <>
      <div className='App'>
        <Button onClick={() => setCounter(counter + 1)}>+</Button>
        <h1>{counter}</h1>
        <Button onClick={() => setCounter(counter - 1)}>-</Button>
      </div>
      <div>
        <Button onClick={() => setShow(!show)}>{show ? 'HIDE' : 'SHOW'}</Button>
        {show && <h2>SECRET MESSAGE</h2>}
      </div>
    </>
  )
}

export default App
