import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Friend from './Friend'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Friends></Friends>
    <Friend></Friend>
    <Users></Users>
      <Counter></Counter>
      <Team></Team>


    </>
  )
}

export default App
