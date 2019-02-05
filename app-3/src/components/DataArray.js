import React, { Component } from 'react'

class DataArray extends Component{
    constructor(){
        super()
        this.state = {
            animals: [
                `Bear`, `Wolf`, `Moose`, `Elk`, `Bighorn`
            ],
            input: ``
        }
        // this.state.handleChange = this.state.handleChange.bind(this)
    }
    
    handleChange(val){
        this.setState({
            input: val
        })
    }

    render(){
        return(
            <div>
                <input onChange={ (e) => this.handleChange(e.target.value) }/>
                {this.state.animals.map( (val,i) => { 
                    if(val.startsWith(this.state.input)){
                        return <h2 key={i}>{val}</h2> 
                    } 
                })} 
            </div>
        )
    }
}
export default DataArray;