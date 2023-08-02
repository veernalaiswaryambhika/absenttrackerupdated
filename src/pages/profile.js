import React from 'react';
import Calendar from 'react-calendar';
import ModalDialog from './modal';

function Profile()
{
    return(
        <>
            <div>
                <h2 style={{color: 'red',paddingLeft: '10px'}}>Student Profile:</h2>
            </div>
            <div className='container'>
                <div className='row' style={{width: '90%'}}>
                    <table style={{marginLeft: '10px',fontWeight: 'bold'}}>
                        <tr>
                            <td>Name</td>
                            <td>: Madhu</td>
                        </tr>
                        <tr>
                            <td>Roll No</td>
                            <td>: 20A91A0524</td>
                        </tr>
                        <tr>
                            <td>College</td>
                            <td>: Aditya Engineering College</td>
                        </tr>
                        <tr>
                            <td>Branch</td>
                            <td>: CSE</td>
                        </tr>
                        <tr>
                            <td>Technology</td>
                            <td>: Mern Stack</td>
                        </tr>
                        <tr>
                            <td>Attendance</td>
                            <td>: 80%</td>
                        </tr>
                    </table>
                </div>
                <br/>
                <div className=''>
                    <div className='container-fluid'>
                        <div className='row'>
                            <span style={{fontWeight: 'bold',fontSize: '25px',color: 'aqua'}}>Apply for a leave:</span>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className='container-fluid' style={{width: '70%'}}>
                        <Calendar />
                    </div>
                </div>
                <br/>
                <br/>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-3'></div>
                        <div className='col-md-6 bnt'>
                            <center><ModalDialog /></center>
                        </div>
                        <div className='col-md-3'></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;