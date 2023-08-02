import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from "react-router-dom";
import Login from './login';
function Signup(){
    const navigate=useNavigate()
    const [isLoggedin,setIsLoggedin]=useState(false);
    const [form,SetForm]=useState('');

    const handleForm=(e)=>{
        SetForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }


    const submithandle=(e)=>{
        console.log(JSON.stringify(form));
        setIsLoggedin(true);
    }
    if(isLoggedin){
        return(
            <Login/>
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
            <div class="card-header chead">Signup</div>
                <div className="card-body" style={{marginBottom:'20px'}}>
                    <form className="form-inline" onSubmit={submithandle}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Your Name" id="name" name="name" onChange={handleForm} />
                        </div><br></br>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Your Rollno" id="rollno" name="rollno" onChange={handleForm}/>
                        </div><br></br>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Enter Your Email" id="email" name="email" onChange={handleForm}/>
                        </div><br></br>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Your Mobile No" id="mobileno" name="mobileno" onChange={handleForm}/>
                        </div><br></br>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Enter Password"id="pass" name="pass" onChange={handleForm}/>
                        </div><br></br>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Confirm Password" id="conpass" name="conpass" onChange={handleForm}/>
                        </div><br></br>
                        <div className='form-group' style={{textAlign:"left"}}>
                            <select style={{width:'100%',border:"1px solid lightgray",height:'35px',borderRadius:'5px',color:'gray',fontSize:'18px'}} name="selec" onChange={handleForm}>
                                <option >select Your Technology</option>
                                <option >DR AWS-FN</option>
                                <option>DR AWS-AN</option>
                                <option>DR+ AWS-FN</option>
                                <option>DR+ AWS-AN</option>
                                 <option>DR+ FSD-FN</option>
                                <option>DR+ FSD-AN</option>
                             </select>
                        </div><br/>
                        <button type="submit" className="btn btn-primary">Register</button><br></br><br></br>
                    
                    
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
export default Signup;