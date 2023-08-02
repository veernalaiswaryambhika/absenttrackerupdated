import React from 'react';
import './App.css'
// import lopic1 from '../Components/images/lopic1.jpeg'

function SignUp() {
    return ( 
      <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-170' >
        <div className="login" >
          <h2 className='mb-3'>Register</h2>
          <form class="needs-validation">
                <div className="form-group was-validated mb-2">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control"   required placeholder='Enter Your Email'></input>
                    
                </div>
                <div className="form-group  was-validated mb-2">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" required placeholder='Enter Your Password'></input>
                    
                </div>
                <div className="form-group  was-validated mb-2"> 
                    <label htmlFor="password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" required placeholder='Enter Confirm Password'></input>
                    
                </div>
                
                <button type='submit' className='btn btn-success w-100 mt-2'>SIGN UP</button>
          </form>
          
        </div>
         
    </div>
   
  
      
    );
  }
  
  export default SignUp;
