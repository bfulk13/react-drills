import React, { Component } from 'react'

class List extends Component{
    constructor(){
        super()

        this.state = {
            listArray: [`Pizza`, `Cinnamon Rolls`, `Stir Fry`, `Chicken`, `Elk Steak`, `Eggs -- cooked any way`, `Oatmeal`]
        }
    }
    
    render(){
        return(
            <div>
                {this.state.listArray.map( (val,i) => { return <h2 key={i}>{val}</h2> })}
            </div>
        )
    }
}

export default List;