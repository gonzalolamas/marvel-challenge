import React from 'react'
import Card from '../Card/Card.js'
import {Contents} from '../Cards/Cards.style'

const Cards = ({items,isLoading}) => {
    return isLoading ? <i className="fa fa-search">Loading</i> :
    <Contents>
        {
            items.map(item=>(
                <Card key={item.id} item={item}></Card>
            ))
        }
    </Contents>
}

export default Cards