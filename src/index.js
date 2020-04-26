import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import App from './component/app'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Moviedetail from './component/moviedetail'
const Routing=()=>{
    return(
        <Router>
            <Route exact path="/" component={App}></Route>
            <Route path="/movie/:id" component={Moviedetail}></Route>
        </Router>
    )
}


ReactDOM.render(<Routing/>,document.getElementById('root'))
