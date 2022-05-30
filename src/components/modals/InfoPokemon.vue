<script setup>
import { ref } from "vue";
import CloseIcon from "../icons/CloseIcon.vue";
import NormalButton from "../NormalButton.vue";
import FavoriteButton from "../FavoriteButton.vue";
import { onClickOutside } from "@vueuse/core";
import { usePokemonStore } from "@/stores/pokemon";

defineProps({
  pokemon: Object,
});

const modal = ref(null);

onClickOutside(modal, () => emit("close"));

const store = usePokemonStore();

function isFavorite(pokemon) {
  return store.favoritePokemons.find((p) => p.name === pokemon.name)
    ? true
    : false;
}

function toggleFavorite(pokemon) {
  store.toggleFavorite(pokemon);
}

function copyAttribs(pokemon) {
  const { name, weight, height, types } = pokemon;
  const attribs = `name: ${name}, weight: ${weight}, height: ${height}, types: ${types}`;
  navigator.clipboard.writeText(attribs);
}

const emit = defineEmits(["close"]);
</script>
<template>
  <div
    class="fixed top-0 bg-dark/50 h-screen w-screen flex justify-center items-center"
  >
    <section class="w-80 h-5/6 bg-white flex flex-col rounded-md" ref="modal">
      <header
        class="h-2/5 bg-modal bg-cover relative rounded-t-md flex justify-center"
      >
        <CloseIcon
          class="absolute right-0 m-3 w-6 h-6 cursor-pointer"
          @click="emit('close')"
        />
        <img :src="pokemon.img" class="max-h-full" />
      </header>
      <main class="h-3/5 px-6 flex flex-col">
        <ul class="flex flex-col text-xl justify-center capitalize py-6">
          <li><strong>Name: </strong>{{ pokemon.name }}</li>
          <li><strong>Weight: </strong>{{ pokemon.weight }}</li>
          <li><strong>Height: </strong>{{ pokemon.height }}</li>
          <li><strong>Types: </strong>{{ pokemon.types }}</li>
        </ul>
        <section class="flex justify-between">
          <NormalButton class="text-xl" active @click="copyAttribs(pokemon)">
            Share to my friends
          </NormalButton>
          <FavoriteButton
            @click="toggleFavorite(pokemon)"
            :active="isFavorite(pokemon)"
          />
        </section>
      </main>
    </section>
  </div>
</template>
<style scoped>
li {
  @apply py-3 border-b;
}

.bg-modal {
  background-image: url("@/assets/img/modal-background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
