import React, { Component } from 'react'

class NewTask extends Component{
    constructor(){
        super()

        this.state = {
            input: ''
        }
    }

    handleInput = (val) => {
        this.setState({ input: val })
    }

    handleAdd = () => {
        this.props.add(this.state.input)
        this.setState({ input: '' })
    }

    render(){
        return(
            <div>
                <input
                    value={this.state.input}
                    placeholder="Enter a new task"
                    onChange={e => this.handleInput(e.target.value)}
                />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

export default NewTask;