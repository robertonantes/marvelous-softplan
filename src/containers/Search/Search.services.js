import { debounce } from "throttle-debounce";
import { fetchCharacters } from "../../common/services";

export const debouncedFetch = debounce(500, async (term, callbacks = {}) => {
  const options = {
    nameStartsWith: term,
    orderBy: "name",
    limit: 5,
  };

  const response = await fetchCharacters(options);
  if (response.success) {
    callbacks.onSuccess(response.data);
  } else {
    callbacks.onError(response.error);
  }

  callbacks.onDone();
});

export function isSearchAllowed(term) {
  return term.trim().length >= 3;
}

export function clickedOutside(event, container) {
  return container.current && !container.current.contains(event.target);
}
