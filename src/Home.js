import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

class Home extends React.Component{

    handleClick=()=>{
        let route='./adress'
        this.props.history.push(route)
    }
    
    render(){
        return(
            <div>
                <button type="button"  className="btn btn-primary mt-4" onClick={this.handleClick}>Adress</button>
            </div>
        )
    }
}

export default Home