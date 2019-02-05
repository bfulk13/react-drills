import React, { Component } from 'react'

class TextBox extends Component{
    constructor(){
        super()
        this.state = {
            userInput: ``
        }
    }
    
    handleChange(val){
        this.setState({ userInput: val })
    }

    render(){
        return(
            <div>
                <input className='inputField' onChange={ (e) => { this.handleChange(e.target.value) } }/>
                <h3>{this.state.userInput}</h3>
            </div>
        )
    }
}

export default TextBox;