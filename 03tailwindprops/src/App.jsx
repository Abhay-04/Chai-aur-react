import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <h1 className='bg-green-400 p-4 text-black rounded-xl mb-4' > Tailwind & Props</h1>

     < Card userName = "chai aur code" btnText = "Click Me" />
     < Card userName = "chai aur React" btnText = "Visit Me" />



    </>
  )
}

export default App
