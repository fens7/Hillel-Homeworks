import React from 'react'
import { useSelector } from 'react-redux';


function Footer() {
    const todos = useSelector(state => state.todos.todos)
    
  return (
    <div style={{backgroundColor: 'rgb(51, 51, 51)', color:'white', padding: '14px 0'}} className='footer'>
        <span style={{fontSize: '34px'}}>Tasks: {todos.length}</span>
    </div>
  )
}

export default Footer