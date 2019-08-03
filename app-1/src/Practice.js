import React, { Component } from 'react';

class TextBox extends Component{
    constructor(){
        super()
        this.state = {
           
        }
    }

    

    render(){
        return(
            <div>
                <input className='inputField' onChange={ (e)=>{ this.handleInput(e.target.value) } }/>
                <h3>{this.state.userInput}</h3>
            </div>
        )
    }
}