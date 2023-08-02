import React from 'react';
function AbsentList()
{
    return(
        <div>
            <div>
                <h5 style={{color:'red',paddingTop:'1%',paddingLeft:'1%'}}>Absentees</h5>
            </div>
            <div class="container-fluid">
                <div class="row" style={{paddingTop:'2%'}}>
                    <center>
                        <div class="col-md-12" style={{background:'lightgray',width:'80%'}}>
                            <table class="table" id="t4">
                                <tr>
                                    <td><b>From Date:</b></td>
                                    <td style={{textAlign:'center'}}><input id="i1" type="date" style={{height:'20px',backgroundColor:'white'}}></input></td>
                                    <td><b>To Date:</b></td>
                                    <td style={{textAlign:'center'}}><input id="i1" type="date" style={{height:'20px',backgroundColor:'white'}}></input></td>
                                </tr>
                            </table>
                        </div>
                    </center>
                </div>
                <div class="row" style={{paddingTop:'2%'}}>
                    <div class="col-md-12">
                        <center>
                            <table id="t3" class="table table-bordered" style={{textAlign:'center',border:'2px solid black',backgroundColor:'#edf5bf',width:'80%'}}>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Date</th>
                                    <th>Roll No</th>
                                    <th>Reason</th>
                                </tr>
                                <tr>
                                    <td>1.</td>
                                    <td>13/03/2023</td>
                                    <td>20A91A0529</td>
                                    <td>Fever</td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>14/03/2023</td>
                                    <td>20A91A05H4</td>
                                    <td>Headache</td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>15/03/2023</td>
                                    <td>20A91A05I3</td>
                                    <td>No proper intimation</td>
                                </tr>
                            </table>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AbsentList;