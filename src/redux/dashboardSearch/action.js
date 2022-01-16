import { SEARCH_PROPERTY, FETCH_PROPERTIES, FETCH_PROPERTY } from "./types";
import axios from "axios";

export const searchProperty = (text) => ({
  type: SEARCH_PROPERTY,
  payload: text,
});

export const fetchProperties = (text) => (dispatch) => {
  axios
    .get(`http://localhost:4000/properties?s=${text}`)
    .then((response) =>
      dispatch({
        type: FETCH_PROPERTIES,
        payload: response.data,
      })
    )
    .catch((error) => console.error(error));
};

export const fetchProperty = (id) => (dispatch) => {
  axios
    .get(`http://localhost:4000/properties?id=${id}`)
    .then((response) =>
      dispatch({
        type: FETCH_PROPERTY,
        payload: response.data,
      })
    )
    .catch((error) => console.log(error));
};
