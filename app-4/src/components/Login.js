import React, { Component } from 'react'

class Login extends Component{
    constructor(){
        super()

        this.state = {
            username: ``,
            password: ``
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleUser(val){
        this.setState({
            username: val
        })
    }
    
    handlePass(val){
        this.setState({
            password: val
        })
    }

    handleLogin(){
            alert(`username: ${this.state.username}; password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input placeholder='username' onChange={ (e) => { this.handleUser(e.target.value) } } />
                <input placeholder='password' onChange={ (e) => { this.handlePass(e.target.value) } } />
                <button onClick={ this.handleLogin }>Login</button>
            </div>
        )
    }
}

export default Login;