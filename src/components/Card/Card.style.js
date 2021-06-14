import styled from "styled-components"

export const Content = styled.div `
  cursor: pointer;
  height: 300px;

&.content img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
`;

export const ContentInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const ContentFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  overflow-y: auto;
`;