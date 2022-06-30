import React from 'react';
import '../table/CS1.css'; 



class Header extends React.Component{
    constructor(props){
        super(props);

        this.state={
            items: [],
            datacheck: false
        };
    }

    componentDidMount(){
        fetch(
            "https://jsonplaceholder.typicode.com/users") 
            .then((res)=> res.json())
            .then((json)=>{
                this.setState({
                    items: json,
                    datacheck: true 
                })
            })
        

    }
    
    addEmp = () => {
        window.location.href = '/addform'; 
    }
    

    render(){
        const {items, datacheck}= this.state; 
        if(!datacheck){
            return (
                <div>
                    <h1>Please wait some time while data is loading......</h1>
                </div>
            )
        }

        return(
            <div className='cont'> 

                <div className='cont1 d-flex flex-row justify-content-start'>
                    <h1 className='head'>Nitya Software India PVT. LMT</h1> 
                    <button className='butt' onClick={this.addEmp}>Add new Employee Data</button>

                </div>
                <div className='cont2'>
                {/* <button className='butt'>Add new Employee Data</button> */}
                <h1 className='head1'>The Data of the employees who are working for Australia Bank Project...</h1> 
                 <div className='row'>
                     <div className='col-10 tab'>
                         <table className='table table-hover'>
                         <thead>
                             <tr style={{"color":"white", "backgroundColor":"#754043"}}>
                                 <th>ID</th>
                                 <th>Name</th>
                                 <th>UserName</th>
                                 <th>City</th>
                                 <th>Suitee</th>
                                 <th>ZipCode</th>

                             </tr>
                         </thead>
                         <tbody>
                             {items.map((item)=>{
                                 return(
                                     <tr style={{"color":"#4B5D67", "font-size":"bold"}}>
                                         <td>{item.id}</td>
                                         <td>{item.name}</td>
                                         <td>{item.username}</td>
                                         <td>{item.address.city}</td>
                                         <td>{item.address.suite}</td>
                                         <td>{item.address.zipcode}</td>

                                     </tr>
                                 )
                             })

                             }
                         </tbody>

                         </table>

                     </div>

                 </div>

                </div>



                {/* <h1>The data of the employees who are working in our company...</h1> */}
                {/* {items.map((item)=> {
                    return(
                        <h1>{item.name}</h1>
                    )
                    
                })} */}

            </div>
        )
    }
}



export default Header;