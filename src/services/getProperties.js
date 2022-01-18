import axios from "axios";

const getProperties = (text, equipment) =>
  new Promise((resolve) => {
    const allData = axios.get("http://localhost:3004/properties", {
      params: {
        ...(text ? { q: text } : {}),
        ...(equipment ? { equipment: equipment } : {}),
      },
    });
    setTimeout(() => {
      resolve(allData);
    }, 2000);
  });

export default getProperties;
