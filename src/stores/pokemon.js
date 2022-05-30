import { defineStore } from "pinia";

export const usePokemonStore = defineStore({
  id: "pokemon",
  state: () => ({
    favoritePokemons: [],
  }),
  actions: {
    toggleFavorite(pokemon) {
      const exist = this.favoritePokemons.find((p) => p.name === pokemon.name);
      console.log("exist: ", exist);
      exist ? this.removeFavorite(pokemon) : this.addFavorite(pokemon);
    },
    addFavorite(pokemon) {
      this.favoritePokemons.push(pokemon);
      console.log("added");
    },
    removeFavorite(pokemon) {
      this.favoritePokemons = this.favoritePokemons.filter(
        (p) => p.name !== pokemon.name
      );
      console.log("removed");
    },
  },
});
