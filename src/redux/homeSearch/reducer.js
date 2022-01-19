import {
  SEARCH_PROPERTY,
  SET_PROPERTIES_DATA,
  SET_EQUIPMENT,
  SET_HOMETYPE,
  SET_CONDITION,
  SET_TERRACE,
  SET_SWIMMING_POOL,
  SET_PET_ALLOWED,
  SET_LIFT,
  SET_AIR_CONDITIONING,
  SET_GARDEN,
  SET_BATH_ROOM,
  SET_BED_ROOM,
} from "./types";
import initialState from "./state";

const homeSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PROPERTY:
      return {
        ...state,
        text: action.payload,
      };
    case SET_PROPERTIES_DATA:
      return {
        ...state,
        properties: action.payload.data,
      };
    case SET_EQUIPMENT:
      return {
        ...state,
        equipment: action.payload,
      };
    case SET_HOMETYPE:
      return {
        ...state,
        homeType: action.payload,
      };
    case SET_CONDITION:
      return {
        ...state,
        condition: action.payload,
      };
    case SET_TERRACE:
      return {
        ...state,
        terrace: action.payload,
      };
    case SET_SWIMMING_POOL:
      return {
        ...state,
        swimming_pool: action.payload,
      };
    case SET_PET_ALLOWED:
      return {
        ...state,
        pet_allowed: action.payload,
      };
    case SET_LIFT:
      return {
        ...state,
        lift: action.payload,
      };
    case SET_AIR_CONDITIONING:
      return {
        ...state,
        air_conditioning: action.payload,
      };
    case SET_GARDEN:
      return {
        ...state,
        garden: action.payload,
      };
    case SET_BATH_ROOM:
      return {
        ...state,
        bathroom: action.payload,
      };
    case SET_BED_ROOM:
      return {
        ...state,
        bedroom: action.payload,
      };
    default:
      return state;
  }
};

export default homeSearchReducer;
