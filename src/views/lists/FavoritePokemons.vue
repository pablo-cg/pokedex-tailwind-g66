<script setup>
import { computed, ref } from "vue";
import InfoPokemon from "../../components/modals/InfoPokemon.vue";
import { usePokemonStore } from "@/stores/pokemon";

const searchInput = ref("");
const isModalOpen = ref(false);
const selectedPokemon = ref();

const store = usePokemonStore();

const pokemons = computed(() => {
  return store.favoritePokemons.filter((p) =>
    p.name.includes(searchInput.value.toLowerCase())
  );
});

function isFavorite(pokemon) {
  return store.favoritePokemons.find((p) => p.name === pokemon.name)
    ? true
    : false;
}

async function showInfoPokemon(pokemon) {
  selectedPokemon.value = pokemon;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>
<template>
  <section>
    <header class="mb-4">
      <SearchInput v-model="searchInput" />
    </header>
    <main class="flex flex-col gap-2">
      <ListItem
        v-for="pokemon in pokemons"
        :key="pokemon"
        :pokemon="pokemon.name"
        class="hover:scale-105 transition-all"
        @more-info="showInfoPokemon(pokemon)"
        :active="isFavorite(pokemon)"
      />
    </main>
    <Teleport to="body">
      <InfoPokemon
        v-if="isModalOpen"
        @close="closeModal"
        :pokemon="selectedPokemon"
      />
    </Teleport>
  </section>
</template>
