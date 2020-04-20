import React, { Component } from 'react';
import SearchBar from './searchbar'
import Searchmovie from './searchmovie'
import Single from './singlemovie'
import axios from 'axios'

export default class App extends Component{
    state={txt:"",list:[]}
    submitted=(txt)=>{
        if(txt!==''){
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=00511e16437f5d911eb6494f55abdca5`,{
                params:{
                    query:txt
                }
            }).then((obj)=>{
                    console.log(obj)
                    const mov= obj.data.results.map((movie)=>{
                        console.log(movie)
                        if (!movie.adult){
                            return <Single movie={movie}/>
                        }
                        
                        
                    })
                    this.setState({list:mov}) 
                })
                .catch(()=>{
                    console.log('Not reached')
        
            })
        }
    }



    render(){
        return(
            <div>
                <SearchBar onsubmit={this.submitted}/>
                <Searchmovie  title={this.state.list}/>
            </div>
        )
    }
}