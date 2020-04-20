import React, { Component } from 'react';
import './style.css'
export default class SearchBar extends Component{
    state={item:""}
    inputChanged=(txt)=>{  
        this.setState({item:txt.target.value})
        this.submitted(txt)
    }

    submitted=(txt)=>{
        txt.preventDefault()
        this.props.onsubmit(this.state.item)

    }

    render(){
        return(
            <div class="ui search container" id="searchdiv">
                
                    <span>Movie Search</span>
                    <form  id="searchbar" class="ui icon input container " onSubmit={this.submitted}>
                    <input 
                        value={this.state.item}
                        class="prompt "
                        type="text" 
                        placeholder="Common passwords..."
                        onChange={this.inputChanged}
                        />
                        <i class="search icon"></i>
                    </form>
                
            </div>
        )
    }
}