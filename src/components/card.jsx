import React from 'react'
import "../styles/card.css"
export default function Card(props) {
    return (
        <div className='information_card'>
            <img src={props.img} alt="card" />
            <p>{props.title}</p>
            <span>{props.parag}</span>
        </div>
    )
}
