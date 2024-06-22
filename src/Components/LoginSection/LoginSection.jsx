import './LoginSection.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function LoginSection(){

    // Define state to hold email and password values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  // Event handler to update email value
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Event handler to update password value
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Event handler to update rememberMe value
  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with email and password, like submitting to a server
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    
  };

    return(
        <form className=' m-auto max-w-full flex flex-col p-3 items-start md:-mt-12 lg:mt-0 gap-3 text-white' onSubmit={handleSubmit}>

            <label className=' flex flex-col items-start w-full'>
                Email
                <input 
                    type='email' 
                    placeholder='email address'
                    value={email} 
                    onChange={handleEmailChange} required 
                    className=' placeholder:text-[#ef7115] placeholder:font-thin placeholder:text-xs bg-transparent w-full border-b-white border-b-[3px] text-[#EF7115]'
                />
            </label>

            
            <label className=' flex flex-col items-start w-full'>
                Password
                <input 
                    type='password' 
                    placeholder='Password'
                    value={password} 
                    onChange={handlePasswordChange} required 
                    className=' bg-transparent w-full border-b-white border-b-[3px]  text-[#EF7115] placeholder:text-[#ef7115] placeholder:font-thin placeholder:text-xs' 
                />
            </label>

            <div className='flex gap-16'>
                <label className='text-[14px] text-[#EF7115]'>
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                        
                    />
                    Remember 
                </label>
                <span className=' text-sm'>Forgot Your Password?</span>
            </div>

            <button 
                type="submit"
                className='text-[#ef7115] text-[14px] mx-auto my-2 border-2 border-[#ef7115] rounded-full px-5 pb-1'>
                <Link to='/dashboard'>Login</Link>
            </button>

            <div className=' flex flex-row text-white text-[14px] mx-auto gap-3'>
                <p>Not a User?</p> 
                <button className='text-[#ef7115] font-semibold underline underline-offset-2'>Signup Now</button>
            </div>
        </form>
    )
}