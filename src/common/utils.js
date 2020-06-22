export function assembleImageUrl(thumbnail, size) {
  const sizePath = size ? `/${size}` : "";
  return `${thumbnail.path}${sizePath}.${thumbnail.extension}`;
}
