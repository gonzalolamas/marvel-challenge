import React, {useState} from 'react'
import {Container} from './Search.style'
import {SearchChar} from './Search.style'

const Search = ({search}) => {
    const[text,setText] = useState('')

    const onSearch= (t)=>{
        setText(t)
        search(t)
    }

    return (
        <SearchChar>
            <Container >
            <form>
                <input type="text"
                className="form-control"
                placeholder="Find a hero"
                autoFocus
                onChange={(e)=>onSearch(e.target.value)}
                value={text}/>
            </form>
            <i className="fa fa-search text-primary"></i>
            </Container>
        </SearchChar>
    )
}

export default Search
