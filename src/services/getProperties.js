import axios from "axios";

const getProperties = (
  text,
  equipment,
  homeList,
  conditionList,
  bathRoomList,
  bedRoomList,
  isCheckedTerrace,
  isCheckedPetAllowed,
  isCheckedSwimmingPool,
  isCheckedLift,
  isCheckedAirConditioning,
  isCheckedGarden
) =>
  new Promise((resolve) => {
    const allData = axios.get("http://localhost:3004/properties", {
      params: {
        q: text,
        ...(equipment ? { equipment: equipment } : {}),
        ...(homeList ? { type: homeList } : {}),
        ...(conditionList ? { condition: conditionList } : {}),
        ...(bathRoomList ? { bath: bathRoomList } : {}),
        ...(bedRoomList ? { room: bedRoomList } : {}),
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
      },
    });
    setTimeout(() => {
      resolve(allData);
    }, 1000);
  });

export default getProperties;
