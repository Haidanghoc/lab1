"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchPokemons() {
    return __awaiter(this, arguments, void 0, function* (limit = 10) {
        const response = yield fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const data = yield response.json();
        const pokemons = yield Promise.all(data.results.map((p, index) => __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(p.url);
            const details = yield res.json();
            return {
                id: details.id,
                name: details.name,
                image: details.sprites.front_default,
                type: details.types[0].type.name
            };
        })));
        return pokemons;
    });
}
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
function renderPokemons(pokemons) {
    const app = document.getElementById("app");
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
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let pokemons = yield fetchPokemons(15);
        pokemons = shuffle(pokemons);
        renderPokemons(pokemons);
    });
})();
