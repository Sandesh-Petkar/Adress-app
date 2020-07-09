import React from 'react'
import data from './Data.json'
import "bootstrap/dist/css/bootstrap.css";

class Adress extends React.Component{

    render(){
        return(
            <div className='conatiner mt-4'>
                <h1 class="text-center text font-italic" style = {{color:'red'}}>List of Adresses</h1>
               <div className='row justify-content-center'>
               
                {
                    data.map((ele,index)=>{
                        return(
                        
                            <div className='col-md-4 col-12  mt-3 '>
                                <div class="card ">
                             <div class="card-body  border border-warning">
                             <h5 class="card-title">Adress id {ele.id}</h5>
                            <p key={index} class="card-text">{ele.Adress}</p>
                            </div>
                        </div>
                        </div>
                        )
                    })
                }
                </div>
                </div>
  
            
        )
    }
}

export default Adress