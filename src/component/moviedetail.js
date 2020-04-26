import React, { Component } from 'react';
import { isUndefined } from 'util';
import './detail.css'
import axios from 'axios'
export default class Moviedetail extends Component{
   
    state = {
        movie : null
    }

    componentDidMount() {
        let id = this.props.match.params.id
        // If redirected from search i.e. clicked then there will be movieProps
        if (!isUndefined(this.props.location.movieProps)) {
            this.setState({ movie: this.props.location.movieProps.movie })
            
        }else {
            // In this case there is no movieProps. Fetch again or do whatever. :P
            axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=00511e16437f5d911eb6494f55abdca5`).then(obj => {
                this.setState({ movie: obj.data })
            }).catch(err => {
                console.log(err)
            })
            

        }
    }

    render(){
        if (!this.state.movie) {
            return (<h1>Loading data...</h1>)
        }else {
            let movie = this.state.movie
            return(
                <div className="moviecontent">
                    
                    <img id="dimg" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}></img>
                
                    <div id="dcontent">
                        <center>
                        <h1>Title:{movie.original_title}</h1> 
                        <h3>IMDB Rating:{movie.vote_average}</h3> 
                        <h3>Overview:</h3><h4>{movie.overview}</h4>
                        <h3>Release:{movie.release_date}</h3>
                        
                        </center>
                        
                    </div>
                    
                </div>
            )
        }
    }
}