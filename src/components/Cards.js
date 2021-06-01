import React from 'react'
import avengers from './images/avengers.svg'
import './Cards.css'

const Cards = () => {
    return(
        <div>
            <img src={avengers} alt={"avengers"} className="card__hero"/>

            <h2 className="title__avengers">
            Avengers
            </h2>
        </div>
    )
}

export default Cards;
