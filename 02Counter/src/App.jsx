import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'






 

function App() {

  let [counter , setCounter] = useState(0)

  // let counter = 15;

  const addValue = () => {
    console.log("clicked" , counter);
    if(counter < 20){
      setCounter(counter + 1);

    }else{
      // counter = 20
    }
  }


  const removeValue = () => {
    console.log("clicked" , counter);
    if(counter > 0){
      setCounter(counter - 1);

    }else{
      // counter = 0
    }
  
  }

  
    return (
    <>
      
      <h1>Chai aur React</h1>
      <h3>Counter Value : {counter} </h3>
      <button 
      onClick={addValue}>Add Value {counter} </button>

      <br />

      <button
      onClick={removeValue}>Remove Value {counter} </button>

      <p>Footer: {counter} </p>
      
      
    </>
  )
}

export default App
