import axios from "axios";
const { REACT_APP_API_URL } = process.env;

// Get Autocomplete.
export async function getAutocomplete(value) {
  try {
    const { data } = await axios.get(
      `${REACT_APP_API_URL}postcodes/${value}/autocomplete`
    );
    return data.result;
  } catch (e) {
    console.error(e);
  }
}

// Get location details.
export async function getpostalCode(value) {
  try {
    const { data } = await axios.get(`${REACT_APP_API_URL}postcodes/${value}`);
    return [data.result];
  } catch (e) {
    console.error(e);
  }
}
