import React from 'react'

export default function Image(props){
    return(
        <div>
            <img src={ props.myImg } alt='elephant-picture'/>
        </div>
    )
}