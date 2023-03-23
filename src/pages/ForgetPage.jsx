import React from 'react'

const ForgetPage = () => {
  return (
    <div>
        <form>
            <div className='inputs'>
                <input type='text' placeholder='Enter Name..'/>
            </div>
            <div className='inputs'>
                <input type='email' placeholder='emial..' />
            </div>
            
            <button type='submit'>Click</button>
        </form>
    </div>
  )
}

export default ForgetPage