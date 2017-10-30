export function getPokemonId(url) {
  if (!url) {
    return;
  }
  return url.match(/\/(pokemon)\/(\d+)/)[2]
}