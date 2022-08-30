import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {incNumber , decNumber} from './actions/index'




const App = () => {
const myState = useSelector((state)=>state.changeTheNumber)
const dispatch = useDispatch();



  return (
    <div className='App'>
      <h1>Increment and Decrement counter Using Redux</h1>
  
  <div className='container'>            
    
      <button onClick={()=>dispatch(incNumber())} >+</button>  
      <h2 id="counting">{myState}</h2>
      <button onClick={()=>dispatch(decNumber())}>-</button>         
  </div>
    </div>
  )
}

export default App
