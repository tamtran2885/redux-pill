import axios from "axios";

const getProperties = (
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
) =>
  new Promise((resolve) => {
    const allData = axios.get("http://localhost:3004/properties", {
      params: {
        q: text,
        ...(equipment ? { equipment: equipment } : {}),
        ...(homeList ? { type: homeList } : {}),
        ...(conditionList ? { condition: conditionList } : {}),
        ...(isCheckedTerrace ? { terrace: isCheckedTerrace } : {}),
        ...(isCheckedPetAllowed ? { pet: isCheckedPetAllowed } : {}),
        ...(isCheckedSwimmingPool
          ? { swimming_pool: isCheckedSwimmingPool }
          : {}),
        ...(isCheckedLift ? { lift: isCheckedLift } : {}),
        ...(isCheckedAirConditioning
          ? { air_conditioning: isCheckedAirConditioning }
          : {}),
        ...(isCheckedGarden ? { garden: isCheckedGarden } : {}),
        ...(bathRoomList ? { bath: bathRoomList } : {}),
      },
    });
    setTimeout(() => {
      resolve(allData);
    }, 1000);
  });

export default getProperties;
