import React from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import '../App.css'; 
function Absentdetails(){ 
    return( 
        <div className="container"> 
            <h3 style={{color:'red',fontWeight:'bold',marginBottom:'20px'}}>Absent Details</h3> 
            <div className="row"> 
                <div className="col-md-2"></div> 
                <div className="col-md-8 tablead"> 
                    <table className="table table-bordered"> 
                        <thead> 
                        <tr> 
                            <th className="theaddata">Month</th> 
                            <th className="theaddata">Date</th> 
                            <th className="theaddata">Reason</th> 
                        </tr> 
                        </thead> 
                        <tbody> 
                        <tr> 
                            <td>January</td> 
                            <td>21/01/2023</td> 
                            <td>Fever</td> 
                        </tr> 
                        </tbody> 
                    </table> 
                </div> 
                <div className="col-md-2"></div> 
            </div> 
        </div> 
    ) 
} 
export default Absentdetails;
