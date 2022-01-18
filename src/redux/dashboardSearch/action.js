import { SEARCH_PROPERTY, SET_PROPERTIES_DATA } from "./types";

import getProperties from "../../services/getProperties";

export const searchProperty = (text) => ({
  type: SEARCH_PROPERTY,
  payload: text,
});

export const setPropertiesData = (response) => ({
  type: SET_PROPERTIES_DATA,
  payload: response,
});

export const fetchProperty = (text) => {
  return async (dispatch) => {
    try {
      const response = await getProperties(text);
      dispatch(setPropertiesData(response));
    } catch (err) {
      console.error(err);
    }
  };
};
