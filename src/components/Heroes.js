import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { obtenerHeroesAccion, siguienteHeroeAccion } from "../redux/heroDucks";

const Heroes = () => {
  const dispatch = useDispatch();

  const heroes = useSelector((store) => store.heroes.array);

  return (
    <div className="container">
      <button onClick={() => dispatch(obtenerHeroesAccion())}>
        get heroes
      </button>
      <button onClick={() => dispatch(siguienteHeroeAccion())}>
        siguientes heroes
      </button>
      <ul>
        {heroes.map((item) => (
          <li key={item.id} className="col-5">
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt={"item"} className="w-50 h-50"
            />

            <h3>{item.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Heroes;
