interface Pokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

async function fetchPokemons(limit: number = 10): Promise<Pokemon[]> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await response.json();

  const pokemons: Pokemon[] = await Promise.all(
    data.results.map(async (p: any, index: number) => {
      const res = await fetch(p.url);
      const details = await res.json();

      return {
        id: details.id,
        name: details.name,
        image: details.sprites.front_default,
        type: details.types[0].type.name
      };
    })
  );

  return pokemons;
}

function shuffle<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

function renderPokemons(pokemons: Pokemon[]) {
  const app = document.getElementById("app") as HTMLElement;
  app.innerHTML = "";

  pokemons.forEach(pokemon => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <span>#${pokemon.id}</span>
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <div>${pokemon.name}</div>
      <small>Type: ${pokemon.type}</small>
    `;

    app.appendChild(card);
  });
}

// Main
(async function main() {
  let pokemons = await fetchPokemons(15); 
  pokemons = shuffle(pokemons);           
  renderPokemons(pokemons);               
})();
