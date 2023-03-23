import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <>
    <div className='App'>
         <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' className="App-logo" alt="logo" />
         <div style={{ width:'190px' }}>
         <h4>THIS IS A BASIC REACT JS LOGIN PAGE</h4>
         </div>

         </div>
         <div className='ss'>
            <NavLink to='/login'  className={({isActive}) => isActive ? 'active' : 'unactive'} ><h2>Login</h2></NavLink>
            <NavLink to='/' className={({isActive}) => isActive ? 'active' : 'unactive'}><h2>SignUp</h2></NavLink>
            
    </div>
            
    </>
  )
}

export default Header