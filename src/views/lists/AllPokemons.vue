<script setup>
import { onMounted, ref } from "vue";
import { usePokeAPI } from "../../services";
import InfoPokemon from "../../components/modals/InfoPokemon.vue";
import { usePokemonStore } from "@/stores/pokemon";
import { useDebounceFn } from "@vueuse/core";

const searchInput = ref("");
const isModalOpen = ref(false);
const pokemons = ref([]);
const selectedPokemon = ref();

const { getAllPokemons, getPokemon } = usePokeAPI();
const store = usePokemonStore();

function isFavorite(pokemon) {
  return store.favoritePokemons.find((p) => p.name === pokemon.name)
    ? true
    : false;
}

async function getData() {
  await getAllPokemons().then((res) => {
    const { results } = res.data;
    pokemons.value = results.map((r) => {
      return { name: r.name };
    });
  });
}

async function getInfoPokemon(pokemon) {
  const { data } = await getPokemon(pokemon?.name);
  const { types, sprites } = data;
  const pokeimg = sprites.other["official-artwork"];
  const poketypes = types.map((t) => t.type.name);
  selectedPokemon.value = {
    name: data?.name,
    weight: data?.weight,
    height: data?.height,
    img: pokeimg.front_default,
    types: poketypes.join(", "),
  };
  isModalOpen.value = true;
}

const search = useDebounceFn(
  async () => {
    if (searchInput.value) {
      const pokemon = searchInput.value.toLowerCase();
      await getPokemon(pokemon).then((res) => {
        pokemons.value = [{ name: res.data?.name }];
      });
    } else {
      await getData();
    }
  },
  1000,
  { maxWait: 3000 }
);

function closeModal() {
  isModalOpen.value = false;
}

function test() {
  console.log("asdas");
}

onMounted(async () => {
  await getData();
});
</script>
<template>
  <section>
    <header class="mb-4">
      <SearchInput v-model="searchInput" @input="search" />
    </header>
    <main class="flex flex-col gap-2">
      <ListItem
        v-for="pokemon in pokemons"
        :key="pokemon"
        :pokemon="pokemon.name"
        class="hover:scale-105 transition-all"
        @more-info="getInfoPokemon(pokemon)"
        @set-favorite="test"
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
