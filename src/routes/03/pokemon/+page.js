export const prerender = false;
export const csr = true;

export async function load({ url }) {
  const limit = 12;
  const offset = Number(url.searchParams.get('offset') || 0);

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data = await res.json();

  for (const pokemon of data.results) {
    const id = pokemon.url.split('/').at(-2);
    pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  return {
    pokemons: data.results,
    offset,
    count: data.count,
    limit
  };
}
