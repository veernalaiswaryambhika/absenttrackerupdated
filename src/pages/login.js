import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from "react-router-dom";
import Nav from "./nav";
import Anav from "./anav";
import Signup from './signup';
function Login(){
    const navigate=useNavigate()
    const [aisLoggedin,asetIsLoggedin]=useState(false);
    const [isLoggedin,setIsLoggedin]=useState(false);
    const [isSignup,setIsSignup]=useState(false);
    const [rollno,setRollno]=useState('')
    const [password,setPassword]=useState('')

    const submithandle=(e)=>{
        if(rollno=="20p31a1220" && password=="ishu"){
            setIsLoggedin(true);
        }
        else if(rollno=="20A91A05H4" && password=="2"){
            asetIsLoggedin(true);
        }
        else
        {
            alert("Invalid credentials");
        }

    };
    if(isLoggedin){
        return(
            <Nav/>
        )
    }
    if(aisLoggedin){
        return(
            <Anav/>
        )
    }
    const submitup=(e)=>{
        setIsSignup(true);
    }
    if(isSignup){
        return(
            <Signup/>
        )
    }


    return(
        <div className='container-fluid loginimg'>
        <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
        <center>
        <div className="log">
            <center>
            <h1 style={{marginTop:"20px",color:"black",marginBottom:"20px"}}>Welcome to <br/> <span style={{color:'red'}}>Absent </span>Tracker</h1>
            </center>
            <br/>
            <div className="card login">
            <div class="card-header chead">Login to continue</div>
                <div className="card-body">
                    <form className="form-inline" onSubmit={submithandle}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Your Rollno" id="rollno" name="rollno" value={rollno} onChange={(e)=>{setRollno(e.target.value)}}/>
                        </div><br></br>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Enter Your Password"id="pass" name="pass" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div><br></br><p style={{textAlign:"left",fontSize:"15px"}}><a href="#" style={{textDecoration:"none"}}>Forget password ?</a></p>
                        <button type="submit" className="btn btn-primary">Sign in</button><br></br><br></br>
                        <p style={{textAlign:"center"}}>----- or -----</p>
                    </form>
                    <form className="form-inline" onSubmit={submitup}>
                        <p style={{fontSize:"15px"}}>Don't have an account?</p>
                    <button className="btn btn-info" style={{color:'white'}  }>SignUp</button>
                    </form>
                </div>
            </div>
        </div>
        </center>
        </div>
        <div className='col-md-3'></div>
        </div>
        </div>
    )
}
export default Login;