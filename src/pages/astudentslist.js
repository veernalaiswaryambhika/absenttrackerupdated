import React from 'react';
function AstudentsList()
{
    return(
        <div>
            <div>
                <h5 style={{color:'red',paddingTop:'1%',paddingLeft:'1%'}}>Students List</h5>
            </div>
            <div class="container-fluid">
                <div class="row" style={{paddingTop:'2%'}}>
                    <center>
                        <div class="col-md-12" style={{background:'lightgray',width:'80%'}}>
                            <center>
                                <table class="table">
                                    <tr>
                                        <td>
                                            <select class="form-select" style={{backgroundColor:'white',border:'2px solid black'}}>
                                                <option selected>Select the batch</option>
                                                <option value="1">DR AWS FN</option>
                                                <option value="2">DR AWS AN</option>
                                                <option value="3">DR+ - AWS FN</option>
                                                <option value="1">DR+ - AWS AN</option>
                                                <option value="2">DR+ - FST FN</option>
                                                <option value="3">DR+ - FST AN</option>
                                            </select>
                                        </td>
                                    </tr>
                                </table>
                            </center>
                        </div>
                    </center>
                </div>
                <div class="row" style={{paddingTop:'2%'}}>
                    <div class="col-md-12">
                        <center>
                            <table id="t2" class="table table-bordered" style={{backgroundColor:'#e6a2e2    ',border:'2px solid black',textAlign:'center',width:'80%'}}>
                                <tr>
                                    <th>S.NO</th>
                                    <th>NAME</th>
                                    <th>ROLLNO</th>
                                    <th>COLLEGE</th>
                                </tr>
                                <tr>
                                    <td>1.</td>
                                    <td>K.Madhu Shiva Sai</td>
                                    <td>20A91A0524</td>
                                    <td>AEC</td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>P.Ajay Ganesh</td>
                                    <td>20A91A05H4</td>
                                    <td>AEC</td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>S.Lakshmi Sravya</td>
                                    <td>20A91A05I3</td>
                                    <td>AEC</td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>V.Surya</td>
                                    <td>20A91A05J0</td>
                                    <td>AEC</td>
                                </tr>
                            </table>
                        </center>
                    </div>  
                </div>
            </div>
        </div>
    )
}
export default AstudentsList;