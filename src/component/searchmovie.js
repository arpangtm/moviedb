import React, { Component } from 'react';

import './style.css'

export default class Smovie extends Component{

    render(){
      
        return(
            <div id="list">
                {this.props.title}
            </div>
        )
       
    }
}