import React, {Component} from 'react'
import ToDo from './ToDo'

export default class List extends Component {
    render(){
        let list = this.props.tasks.map((task, i) => {
            return <ToDo key={i} task={task} />
        })
        return <div><h3>{list}</h3></div>;
    }
}