import React from 'react'

const Signup = () => {
  return (
    <div>
        <form>
            <div className='inputs'>
                <input type='text' placeholder='Enter Name..'/>
            </div>
            <div className='inputs'>
                <input type='email' placeholder='emial..' />
            </div>
            <div className='inputs'>
                <input type='password' placeholder='password' />
            </div>
            <button type='submit'>Regeister</button>
        </form>
    </div>
  )
}

export default Signup