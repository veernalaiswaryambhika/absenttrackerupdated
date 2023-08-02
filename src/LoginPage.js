import React from 'react';
import './App.css'

function LoginPage() {
    return ( 
      <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-130' >
        <div className="login" >
            
          <h2 className='mb-3'>Login Page</h2>
          <form class="needs-validation">
                <div className="form-group was-validated mb-2">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" required placeholder='Please Enter Your Email'></input>
                    
                </div>
                <div className="form-group  was-validated mb-2">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" required placeholder='Please Enter Your Password'></input>
                    
                </div>
                <div className="form-group form-check mb-2">
                    <input type="checkbox" className="form-check-input"></input>
                    <label htmlFor="check" className="form-check-label">Rememnber me</label>
                    
                </div>
                <button type='submit' className='btn btn-success w-100 mt-2'>SIGN IN</button>
                {/* <button type='submit' className='btn btn-success w-100 mt-2'>SIGN UP</button> */}
               <br></br>
                <p>if not Registered ? <span><a href='/SignUp'>SignUp</a></span></p>
          </form>
          
        </div>
        {/* <div className="b4">
                <img src={'th.jpg'} alt='lopic1' height={'390px'} width={'350px'}/>

          </div>  */}
    </div>
   
  
      
    );
  }
  
  export default LoginPage;
