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
} from "./types";

import getProperties from "../../services/getProperties";

export const searchProperty = (text) => ({
  type: SEARCH_PROPERTY,
  payload: text,
});

export const setPropertiesData = (response) => ({
  type: SET_PROPERTIES_DATA,
  payload: response,
});

export const fetchProperty = (
  text,
  equipment,
  homeList,
  conditionList,
  isCheckedTerrace,
  isCheckedPetAllowed,
  isCheckedSwimmingPool,
  isCheckedLift,
  isCheckedAirConditioning,
  isCheckedGarden,
  bathRoomList
) => {
  // console.log(homeList);
  return async (dispatch) => {
    try {
      const response = await getProperties(
        text,
        equipment,
        homeList,
        conditionList,
        isCheckedTerrace,
        isCheckedPetAllowed,
        isCheckedSwimmingPool,
        isCheckedLift,
        isCheckedAirConditioning,
        isCheckedGarden,
        bathRoomList
      );
      dispatch(setPropertiesData(response));
    } catch (err) {
      console.error(err);
    }
  };
};

export const changeEquipment = (equipment) => ({
  type: SET_EQUIPMENT,
  payload: equipment,
});

export const changeHomeType = (homeList) => ({
  type: SET_HOMETYPE,
  payload: homeList,
});

export const changeCondition = (conditionList) => ({
  type: SET_CONDITION,
  payload: conditionList,
});

export const changeTerrace = (isCheckedTerrace) => ({
  type: SET_TERRACE,
  payload: isCheckedTerrace,
});

export const changeSwimmingPool = (isCheckedSwimmingPool) => ({
  type: SET_SWIMMING_POOL,
  payload: isCheckedSwimmingPool,
});

export const changePetAllowed = (isCheckedPetAllowed) => ({
  type: SET_PET_ALLOWED,
  payload: isCheckedPetAllowed,
});

export const changeLift = (isCheckedLift) => ({
  type: SET_LIFT,
  payload: isCheckedLift,
});

export const changeAirConditioning = (isCheckedAirConditioning) => ({
  type: SET_AIR_CONDITIONING,
  payload: isCheckedAirConditioning,
});

export const changeGarden = (isCheckedGarden) => ({
  type: SET_GARDEN,
  payload: isCheckedGarden,
});

export const changeBathRoomType = (bathRoomList) => ({
  type: SET_BATH_ROOM,
  payload: bathRoomList,
});
