import React, { useState } from "react";
import { Container } from "./Search.style";
import { SearchChar } from "./Search.style";

const Search = ({ search }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    search(text);
  };

  return (
    <SearchChar>
      <Container>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Find a hero"
            autoFocus
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </form>
        <i className="fa fa-search text-primary" onSubmit={onSubmit}></i>
      </Container>
    </SearchChar>
  );
};

export default Search;
