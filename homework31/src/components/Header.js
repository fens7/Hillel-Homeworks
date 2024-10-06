import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
        <nav className='nav'>
            <div className='nav-item'><Link to='/'><span>Todo</span></Link></div>
            <div className='nav-item'><Link to='/counter'><span>Counter</span></Link></div>
        </nav>
    </>
  )
}
export default Header;