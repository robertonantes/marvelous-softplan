export function assembleImageUrl(thumbnail, size) {
  const sizePath = size ? `/${size}` : "";
  return `${thumbnail.path}${sizePath}.${thumbnail.extension}`;
}

export function getCustomCharacters() {
  const custom = JSON.parse(
    sessionStorage.getItem("customCharacters") || JSON.stringify({})
  );

  return custom;
}

export function mergeCustomCharacters(characters) {
  const custom = getCustomCharacters();
  const keys = Object.keys(custom);

  const edited = characters.filter((ch) => keys.includes(`${ch.id}`));
  const unaltered = characters.filter((ch) => !keys.includes(`${ch.id}`));

  const merged = edited.map((ch) => {
    return { ...ch, ...custom[ch.id] };
  });

  return [...merged, ...unaltered].sort(
    (a, b) => new Date(a.modified) + new Date(b.modified)
  );
}

export function mergeDetails(data) {
  const custom = getCustomCharacters();
  const keys = Object.keys(custom);
  if (keys.includes(`${data.id}`)) {
    return { ...data, ...custom[data.id] };
  }

  return data;
}
