import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

// RULES OF HOOKS
// 1) YOU CAN USE REACT HOOKS JUST IN REACT FUNCTIONAL COMPONENTS!
// 2) YOU HAVE TO USE REACT HOOKS AT THE TOP LEVEL OF YOUR COMPONENT!
// (this is for mantaining the same invokation order every single time the component re-renders)

// useEffect is the hook counterpart of: componentDidMount, componentDidUpdate and componentWillUnmount

const UseEffectComponent = () => {

    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(10)

    useEffect(() => {
        // the first argument is the code you want to execute
        console.log('just like componentDidMount')
    }, [
        // the second argument is always an array
        // this is called the DEPENDENCY ARRAY
        // the DEPENDENCY ARRAY tells the hook HOW OFTEN re-execute itself
        // an EMPTY dependency array, like this one, tells the hook to execute the function
        // JUST ONCE
    ])

    // so, if you want to mimic the behavior of componentDidMount in a functional component
    // with the useEffect hook, the signature to follow is this one:
    // useEffect(() => {}, [])

    useEffect(() => {
        // this is like a componentDidUpdate without any handbrake, we're going to re-enter
        // this useEffect automatically every time there's a change in the props or in any
        // state variable of this component!
        console.log('like a generic componentDidUpdate')
        // setCounter(counter + 1) <-- super dangerous, it will enter the useEffect again and again...
        // just like using setState in a componentDidUpdate without a condition!
    })

    useEffect(() => {
        console.log("you're going to see this every time counter2 changes!")
    }, [
        counter2
        // I'm just listening to counter2 for re-invoking the function!
        // this will NOT appear if I just increase counter1 (clicking the first button)
    ])

    return (
        <>
            <Button onClick={() => setCounter1(counter1 + 1)}>INCREASE COUNTER1</Button>
            <p>{counter1}</p>
            <Button onClick={() => setCounter2(counter2 + 1)}>INCREASE COUNTER2</Button>
            <p>{counter2}</p>
        </>
    )
}

export default UseEffectComponent