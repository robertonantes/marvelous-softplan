export async function fetchServiceData(endpoint, options) {
  try {
    const querystring = require("query-string");

    const stringified = querystring.stringify(options);
    const response = await fetch(
      `${process.env.REACT_APP_MARVEL_SERVICE}${endpoint}?${stringified}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    const json = await response.json();
    const { data } = json;

    return { success: true, data: data.results };
  } catch (e) {
    return { success: false, error: e };
  }
}

export async function fetchCharacters(options = {}) {
  return fetchServiceData("/characters", options);
}

export async function fetchCharacterDetails(id, options = {}) {
  return fetchServiceData(`/characters/${id}`, options);
}

export async function fetchCharacterSeries(id, options = {}) {
  return fetchServiceData(`/characters/${id}/series`, options);
}
