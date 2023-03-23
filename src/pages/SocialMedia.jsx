import React from 'react'
import { Link } from 'react-router-dom'

const SocialMedia = () => {
  return (
      <>
                <h3><Link to='/forgot-page' style={{color:'palevioletred'}}>Forgot Password?</Link></h3>

                <h5> or login with</h5>

    <div class="social-icons">
                    <span><img src='https://th.bing.com/th/id/OIP.zGN-I33BmulL9J4LjyZmQAHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7' alt="google-icon"/></span>
                   <span> <img src='https://th.bing.com/th/id/OIP.z94bhZ8coMLO86L6bylwvQHaIU?w=149&h=180&c=7&r=0&o=5&pid=1.7' alt="facebook-icon"/></span>
                   <span> <img src='https://th.bing.com/th/id/OIP.T9W8FR0DLy4WuS8DKub7AgHaFj?pid=ImgDet&rs=1' alt="twitter-icon"/></span>
                </div>

                <div>
                  <h4>Don't Have an Account?<span>Create account now</span></h4> 
                 <h4>By signing you a agree with our <span>Terms&Conditions</span></h4>
                </div>
    </>
  )
}

export default SocialMedia