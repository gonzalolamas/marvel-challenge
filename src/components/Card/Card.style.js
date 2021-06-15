import styled from "styled-components";

export const Content = styled.div`
  -moz-box-shadow: 0px 0px 5px #f44246;
  -webkit-box-shadow: 0px 0px 5px #f44246;
  box-shadow: 0px 0px 5px #f44246;

  padding: 10px;
  border: 1px solid #c4d7fe;
  width: 100%;
  margin: 20px;

  & img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
