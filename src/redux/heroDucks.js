import axios from "axios";

// constantes
const dataInicial = {
  array: [],
  offset: 0,
};

//types
const OBTENER_HEROES_EXITO = "OBTENER_HEROES_EXITO";
const SIGUIENTE_HEROES_EXITO = "SIGUIENTE_HEROES_EXITO";
const OBTENER_HEROES_BUSQUEDA = "OBTENER_HEROES_PRIMERO";

// reducer
export default function heroReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_HEROES_EXITO:
      return { ...state, array: action.payload };
    case SIGUIENTE_HEROES_EXITO:
      return {
        ...state,
        array: action.payload.array,
        offset: action.payload.offset,
      };
    case OBTENER_HEROES_BUSQUEDA:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}

// acciones
export const obtenerHeroesAccion = () => async (dispatch, getState) => {
  //console.log('getState', getState().heroes.offset)

  let X = 500;

  const offset = getState().heroes.offset;

  const aleatorio = Math.floor(Math.random() * (X + offset));
  try {
    const res = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?limit=9&offset=${aleatorio}&ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=bd0722d5750b6362d5ba0212ca36726b`
    );
    dispatch({
      type: OBTENER_HEROES_EXITO,
      payload: res.data.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const siguienteHeroeAccion = () => async (dispatch, getState) => {
  //primera alt
  const offset = getState().heroes.offset;
  const siguiente = offset + 20;

  try {
    const res = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?limit=8&offset=${siguiente}&ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=bd0722d5750b6362d5ba0212ca36726b`
    );
    dispatch({
      type: SIGUIENTE_HEROES_EXITO,
      payload: {
        array: res.data.data.results,
        offset: siguiente,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const obtenerHeroesBusqueda = () => async (dispatch, getState) => {
  //console.log('getState', getState().heroes.offset)

  const offset = getState().heroes.offset;

  try {
    const res = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?limit=8&offset=${offset}&ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=bd0722d5750b6362d5ba0212ca36726b`
    );

    dispatch({
      type: OBTENER_HEROES_EXITO,
      payload: res.data.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};
