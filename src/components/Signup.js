
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [fullName,setFullName] = useState('');
  const [aboutMe,setAboutMe] = useState('');
  const [qualification,setQualification] = useState('');
  const [experience,setExperience] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [phone,setPhone] = useState('');
  const [profilePic,setProfilePic] = useState(null);
  const [imageUrl,setImageUrl] = useState(null);

  const submitHandler = (e)=>{
    e.preventDefault();
      console.log(fullName,phone,experience,email,password);
  }

  const fileHandler = (e)=>{
    console.log(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    setProfilePic(e.target.files[0]);

  }
  
  return (
    <div className='signup-wrapper'>
    {/*<img alt='background' src={require('../assets/background.jpg')}/>*/}
        <div className='signup-box'>
            <div className='signup-left-box'>
                <img alt='logo' src={require('../assets/logo.png')}/>
                <h1>Kiyansh Coding Classes</h1>
            </div>

            <form onSubmit={submitHandler} className='signup-right-box'>
            
                <h2>Create your Account</h2>
                <input  onChange={(e)=>{setFullName(e.target.value)}} required placeholder='FULL Name'/>
                {/*<input required placeholder='About Me'/>*/}
                <textarea onChange={(e)=>{setAboutMe(e.target.value)}} required placeholder='About Me..' style={{height:60,borderRadius:5,width:380,padding:10,outline:'none'}}/>
                <input onChange={(e)=>{setQualification(e.target.value)}} required placeholder='Highest Qualification'/>
                <input onChange={(e)=>{setExperience(e.target.value)}} required placeholder='Experience'/>
                <input onChange={(e)=>{setEmail(e.target.value)}} required type='email' placeholder='Email'/>
                <input onChange={(e)=>{setPassword(e.target.value)}} required type='password' placeholder='Password'/>
                <input onChange={(e)=>{setConfirmPassword(e.target.value)}} required type='password' placeholder='Confirm Password'/>
                <input onChange={(e)=>{setPhone(e.target.value)}} required placeholder='Phone'/>
                {password.length>0 && confirmPassword.length>0 && confirmPassword != password &&  <p className='error-msg-lines'>Password and Confirm Password is not same </p>}
                <input style={{display: "none"}} id='input-file' onChange={fileHandler} type='file'/>
                <div className='upload-profile'>
                  <button onClick={()=>{document.getElementById("input-file").click()}} className='upload-profile-btn'>upload profile pic</button>
                  {imageUrl == null?<img alt='profile pic' src={require('../assets/profile.png')}/>
                  :<img alt='profile pic' src={imageUrl}/>}
                  
                </div>
                <button onClick={submitHandler} className='submit-btn' type='submit'>submit</button>
                

                <Link className='link' to={'/login'}>Login with your account</Link>


            </form>

        </div>
        
      
    </div>
  )
}

export default Signup
