import axios from "axios";

const getProperties = (text) =>
  new Promise((resolve) => {
    const allData = axios.get(`http://localhost:3004/properties?q=${text}`);
    setTimeout(() => {
      resolve(allData);
    }, 2000);
  });

export default getProperties;
