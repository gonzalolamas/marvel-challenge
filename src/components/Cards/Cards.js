import React from 'react'
import Card from '../Card/Card.js'

const Cards = ({items,isLoading}) => {
    return isLoading ? <i className="fas fa-spinner">Loading</i>  :
    <section className="contents">
        {
            items.map(item=>(
                <Card key={item.id} item={item}></Card>
            ))
        }
    </section>
}

export default Cards