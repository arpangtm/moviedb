import React, { Component } from 'react';
import './style.css'
import {Link} from 'react-router-dom'
import * as slugify from 'slugify'
export default class Single extends Component{

    render(){
       const src=`https://image.tmdb.org/t/p/w500`+this.props.movie.poster_path
       var str=this.props.movie.overview
       var title=this.props.movie.original_title
       if(title.length > 25) title = title.substring(0,25)+'...'
       if(str.length > 200) str = str.substring(0,200)+'...'

       // Directly create a Link Object for Link. Don't need to setState here. setState is useless in this case.
       let link = {
           pathname: `/movie/${this.props.movie.id}/${slugify(this.props.movie.original_title)}`,
           movieProps: {
               movie: this.props.movie
           }
        }

        return(
<<<<<<< HEAD
            <Link to={link}>
                <figure class="imghvr-flip-diag-1" id="container">
                    <img id="img" src={src} />
                    <figcaption id="inside">
                        <h4>Title:  {this.props.movie.original_title}</h4>
                        <h4>Release Date: {this.props.movie.release_date}</h4>
                        <h4>Overview:</h4> 
                        <p>{str}</p>
                    </figcaption>
                    <div id="detail">
                        <h3><center> {title}</center></h3> 
                    </div>
                </figure>
            </Link>
=======
            <figure class="imghvr-flip-diag-1" id="container" onClick={this.seeclicked}>
                <img id="img" src={src}/>
                <figcaption id="inside">
                    <h4>Title:  {this.props.movie.original_title}</h4>
                    <h4>Release Date: {this.props.movie.release_date}</h4>
                    <h4>Overview:</h4> 
                    <p>{str}</p>
                    <Link to={this.state.forlink}>
                        <button >See More</button>
                    </Link>
                </figcaption>
                <div id="detail">
                    <h3><center> {title}</center></h3> 
                </div>
            </figure>
>>>>>>> e0fd909be79e5b0d6f560d790909419abf655b7e

        )
    }
} 