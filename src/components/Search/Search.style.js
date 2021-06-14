import styled from "styled-components";

export const SearchChar = styled.section`
  height: 100px;
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  & form input[type="text"] {
    display: block;
    padding: 10px;
    font-size: 20px;
    border: 2px solid black;
    border-radius: 5px;
    width: 100%;
    margin: auto;
  }
`;
