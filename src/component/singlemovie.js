import React, { Component } from 'react';
import './style.css'
export default class Single extends Component{
    // image=(obj)=>{
    //     axios.get(`https://image.tmdb.org/t/p/w500`+obj).then((img)=>{
    //         console.log(img)
    //     })
    // }

    render(){
       const src=`https://image.tmdb.org/t/p/w500`+this.props.movie.poster_path
       var str=this.props.movie.overview
       var title=this.props.movie.original_title
       if(title.length > 25) title = title.substring(0,25)+'...'
       if(str.length > 200) str = str.substring(0,200)+'...'
        return(
            <figure class="imghvr-flip-diag-1" id="container">
                <img id="img" src={src}/>
                <figcaption id="inside">
                    <h4>Title:  {this.props.movie.original_title}</h4>
                    <h4>Release Date: {this.props.movie.release_date}</h4>
                    <h4>Overview:</h4> 
                    <p>{str}</p>
                    <button >See More</button>
                </figcaption>
                <div id="detail">
                    <h3><center> {title}</center></h3> 
                </div>
            </figure>

        )
    }
} 