import React from 'react';
import '../table/CS1.css';
 
class Form extends React.Component{
    constructor(props){
        super(props)
    }

    backto = () => {
        window.location.href = '/'; 
    }

    render(){
        return(
            <div className='cont'>
                <div className='cont1 d-flex flex-row justify-content-start'>
                    <h1 className='head'>Nitya Software India PVT. LMT</h1> 
                    <button className='butt' onClick={this.backto}>Back to Menu Page</button>

                </div> 
                <div className='bc'>

                <div className='botcont'>
                    <p style={{"font-weight":"bold", "font-size":"25px"}}>Please enter the details below.</p> 
                    <div style={{"margin-top":"10px"}}>
                        <label for="id1" style={{"color":"black", "font-weight":"bold"}}>First Name</label>
                        <input type='text' id='id1' style={{"margin-left":"10px"}} placeholder='Enter here...'></input>
                    </div>
                    <div style={{"margin-top":"10px"}}>
                        <label for="id1" style={{"color":"black", "font-weight":"bold"}}>User Name</label>
                        <input type='text' id='id1' style={{"margin-left":"10px"}} placeholder='Enter here...'></input>
                    </div>
                    <div style={{"margin-top":"10px"}}>
                        <label for="id1" style={{"color":"black", "font-weight":"bold"}}>Date Of Birth</label>
                        <input type='text' id='id1' style={{"margin-left":"10px"}} placeholder='Enter here...'></input>
                    </div>
                    <div style={{"margin-top":"10px"}}>
                        <label for="id1" style={{"color":"black", "font-weight":"bold"}}>Phone Number</label>
                        <input type='text' id='id1' style={{"margin-left":"10px"}} placeholder='Enter here...'></input>
                    </div>
                    <div style={{"margin-top":"10px"}}>
                        <label for="id1" style={{"color":"black", "font-weight":"bold"}}>Email</label>
                        <input type='text' id='id1' style={{"margin-left":"50px"}} placeholder='Enter here...'></input>
                    </div>
                    <div style={{"margin-top":"10px"}}>
                        <label for="id1" style={{"color":"black", "font-weight":"bold"}}>Country</label>
                        <input type='text' id='id1' style={{"margin-left":"30px"}} placeholder='Enter here...'></input>
                    </div>
                    <div style={{"margin-top":"10px"}}>
                        <label for="id1" style={{"color":"black", "font-weight":"bold"}}>State</label>
                        <input type='text' id='id1' style={{"margin-left":"50px"}} placeholder='Enter here...'></input>
                    </div>
                    <div style={{"margin-top":"10px"}}>
                        <label for="id1" style={{"color":"black", "font-weight":"bold"}}>City</label>
                        <input type='text' id='id1' style={{"margin-left":"50px"}} placeholder='Enter here...'></input>
                    </div>

                </div>
                </div>

            </div>
        )
    }
}

export default Form;