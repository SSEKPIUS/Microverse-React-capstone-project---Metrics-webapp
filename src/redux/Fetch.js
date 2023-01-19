import axios from 'axios';

// eslint-disable-next-line no-unused-vars
const fetchZones = async (city = 'London') => {
  const baseURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=adf1eb75381c92ea910a7d9ddbb401a9`;
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default fetchZones;
