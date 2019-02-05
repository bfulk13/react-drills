import React from 'react'
import ToDo from './ToDo'

export default function List(props){
    let list = props.tasks.map( (val,i) => { 
        return(
            <ToDo key={i} task={val} />
        )
    })

    return(
        <div>{ list }</div>
    )
}