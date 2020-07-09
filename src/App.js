import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './Home'
import Adress from './Adress'
import "bootstrap/dist/css/bootstrap.css";


function App(props){
    return( 
        <BrowserRouter>
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link data-toggle="tooltip" data-placement="top" title="Home" class="navbar-brand" to='/'>Home</Link><br/>
            </nav>
            <div class='container'>
            <Route path='/' component={Home} exact={true}/>
            <Route path='/adress' component={Adress} exact={true}/>           
        </div>
        </BrowserRouter>
        
    )
}

export default App