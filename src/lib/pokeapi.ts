export type Pokemon = { name: string; url: string };

export async function fetchPokemonList(limit = 30, offset = 0): Promise<Pokemon[]> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data = await res.json();
  return data.results;
}
