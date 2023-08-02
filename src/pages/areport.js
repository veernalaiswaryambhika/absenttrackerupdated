import React from 'react';
function Areport()
{
    return(
        <div>
            <div>
                <h5 style={{color:'red',paddingTop:'1%',paddingLeft:'1%'}}>Student Report</h5>
            </div>
            <div class="container-fluid">
                <div class="row" style={{paddingTop:'2%'}}>
                    <center>
                        <div class="col-md-12" style={{background:'lightgray',width:'80%'}}>
                            <table class="table" id="t5">
                                <tr>
                                    <td><b>Enter Roll No:</b></td>
                                    <td style={{textAlign:'center'}}><input id="i2" type="text" style={{height:'20px',backgroundColor:'white'}}></input></td>
                                    <td><b>Select Date:</b></td>
                                    <td style={{textAlign:'center'}}><input id="i2" type="date" style={{height:'20px',backgroundColor:'white'}}></input></td>
                                    <td><i class="fa fa-search fa-2x" aria-hidden="true"></i></td>
                                </tr>
                            </table>
                        </div>
                    </center>
                </div>
                <div class="row" style={{paddingTop:'2%'}}>
                    <div class="col-md-12">
                        <center>
                            <table id="t6" class="table table-bordered" style={{textAlign:'center',border:'2px solid black',backgroundColor:'lightgray',width:'80%'}}>
                                <tr style={{color:'blue'}}>
                                    <th>Month</th>
                                    <th>Date</th>
                                    <th>Reason</th>
                                </tr>
                                <tr>
                                    <td style={{color:'green'}}>Jan</td>
                                    <td>18/01/2023<br/>29/01/2023</td>
                                    <td>Fever<br/>Headache</td>
                                </tr>
                                <tr>
                                    <td style={{color:'green'}}>Feb</td>
                                    <td>10/02/2023<br/>26/02/2023</td>
                                    <td>Headache<br/>Health issue</td>
                                </tr>
                                <tr>
                                    <td style={{color:'green'}}>Mar</td>
                                    <td>14/03/2023</td>
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
export default Areport;