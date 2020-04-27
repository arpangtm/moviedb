import React, { Component } from 'react';
import './detail.css'
export default class Moviedetail extends Component{
    render(){
        console.log(this.props.match)
        console.log(this.props.location.aboutProps.movied)
        let {movied}=this.props.location.aboutProps
        return(
            <div className="moviecontent">
                
                <img id="dimg" src={`https://image.tmdb.org/t/p/w500${movied.backdrop_path}`}></img>
               
                <div id="dcontent">
                    <center>
                    <h1>Title:{movied.original_title}</h1> 
                    <h3>IMDB Rating:{movied.vote_average}</h3> 
                    <span><h3>Overview:</h3></span><span><h4>{movied.overview}</h4></span>
                    <h3>Release:{movied.release_date}</h3>
                    
                    </center>
                    
                </div>
                
            </div>
        )
    }
}