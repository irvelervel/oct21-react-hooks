import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import UseStateComponent from './components/UseStateComponent'
import UseEffectComponent from './components/UseEffectComponent'

// RULES OF HOOKS
// 1) YOU CAN USE REACT HOOKS JUST IN REACT FUNCTIONAL COMPONENTS!
// 2) YOU HAVE TO USE REACT HOOKS AT THE TOP LEVEL OF YOUR COMPONENT!
// (this is for mantaining the same invokation order every single time the component re-renders)

const App = () => {
  return (
    <div className='App-header'>
      <UseEffectComponent />
      {/* <UseStateComponent /> */}
    </div>
  )
}

export default App
