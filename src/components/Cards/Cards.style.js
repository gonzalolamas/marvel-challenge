import styled from "styled-components";

export const Contents = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;

  @media (max-width: 800px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 500px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;
