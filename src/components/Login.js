
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
 
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  

  const submitHandler = (e)=>{
    e.preventDefault();
      console.log(email,password);
  }

 

  
  
  return (
    <div className='signup-wrapper'>
    {/*<img alt='background' src={require('../assets/background.jpg')}/>*/}
        <form onSubmit={submitHandler} className='signup-box'>
            <div className='signup-left-box'>
                <img alt='logo' src={require('../assets/logo.png')}/>
                <h1>Kiyansh Coding Classes</h1>
            </div>

            <div className='signup-right-box'>
                <h2>Create your Account</h2>
                
                <input onChange={(e)=>{setEmail(e.target.value)}} required type='email' placeholder='Email'/>
                <input onChange={(e)=>{setPassword(e.target.value)}} required type='password' placeholder='Password'/>
                
                
                <button onClick={submitHandler} className='submit-btn' type='submit'>submit</button>
                <Link className='link' to={'/signup'}>Create your account</Link>


            </div>

        </form>
        
      
    </div>
  )
}

export default Login
