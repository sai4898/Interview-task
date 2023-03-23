import React from 'react'

const login = () => {
  return (
    <div>
              <form>
            <div className='inputs'>
                <input type='text' placeholder='Email..'/>
            </div>
            <div className='inputs'>
                <input type='password' placeholder='password..' />
            </div>
           
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default login