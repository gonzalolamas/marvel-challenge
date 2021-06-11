import React, {useState} from 'react'

const Search = ({search}) => {
    const[text,setText] = useState('')

    const onSearch= (t)=>{
        setText(t)
        search(t)
    }

    return (
        <section className="search">
            <form>
                <input type="text"
                className="form-control"
                placeholder="Find a hero"
                autoFocus
                onChange={(e)=>onSearch(e.target.value)}
                value={text}/>
            </form>
        </section>
    )
}

export default Search
