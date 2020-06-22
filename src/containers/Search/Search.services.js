export function isSearchAllowed(term) {
  return term.trim().length >= 3;
}

export function clickedOutside(event, container) {
  return container.current && !container.current.contains(event.target);
}
