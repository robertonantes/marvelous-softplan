export async function fetchCharacters(options = {}) {
  try {
    const querystring = require("query-string");

    const stringified = querystring.stringify(options);
    const key = "a2ac89dc440fae737de7ea65bf7b3f11";
    const MARVEL_SERVICE = "https://gateway.marvel.com/v1/public";
    const response = await fetch(
      `${MARVEL_SERVICE}/characters?${stringified}&apikey=${key}`
    );
    const json = await response.json();
    const { data } = json;

    return { success: true, data: data.results };
  } catch (e) {
    return { success: false, error: e };
  }
}

export async function fetchCharacterDetails(id, options = {}) {
  try {
    const querystring = require("query-string");

    const stringified = querystring.stringify(options);
    const key = "a2ac89dc440fae737de7ea65bf7b3f11";
    const MARVEL_SERVICE = "https://gateway.marvel.com/v1/public";
    const response = await fetch(
      `${MARVEL_SERVICE}/characters/${id}?${stringified}&apikey=${key}`
    );
    const json = await response.json();
    const { data } = json;

    return { success: true, data: data.results };
  } catch (e) {
    return { success: false, error: e };
  }
}

export async function fetchCharacterSeries(id, options = {}) {
  try {
    const querystring = require("query-string");

    const stringified = querystring.stringify(options);
    const key = "a2ac89dc440fae737de7ea65bf7b3f11";
    const MARVEL_SERVICE = "https://gateway.marvel.com/v1/public";
    const response = await fetch(
      `${MARVEL_SERVICE}/characters/${id}/series?${stringified}&apikey=${key}`
    );
    const json = await response.json();
    const { data } = json;

    return { success: true, data: data.results };
  } catch (e) {
    return { success: false, error: e };
  }
}
