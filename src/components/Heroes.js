import React, {useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";
import { obtenerHeroesAccion } from "../redux/heroDucks";

import styled from 'styled-components'
import './Card.css'

const color = 'royalblue'

const StyledButton = styled.button`
  color: #fff;
  background-color: ${color};
  border-radius: 2px solid red;
  padding: 0.5rem;
`

const Heroes = () => {
  const dispatch = useDispatch();

  const heroes = useSelector((store) => store.heroes.array);
  
  useEffect(() => {
     dispatch(obtenerHeroesAccion())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        
        {heroes.map((item) => (
          <div className="col-md-4" key={item.id}>
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt={"item"} className="w-50 h-50 card-img-top"
            />

            <h3 className="card-text">{item.name}</h3>
            <StyledButton>Info</StyledButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heroes;
