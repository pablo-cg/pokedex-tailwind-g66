<script setup>
import { useRoute, useRouter } from "vue-router";
import ListIcon from "../icons/ListIcon.vue";
import StarIcon from "../icons/StarIcon.vue";

const route = useRoute();
const router = useRouter();

function isActive(value) {
  return route.name === value;
}

function to(routeName) {
  router.push({ name: routeName });
}
</script>
<template>
  <footer
    class="h-20 w-full bg-white drop-shadow-footer fixed left-0 bottom-0 flex justify-around items-center"
  >
    <NormalButton
      :disabled="isActive('allPokemons')"
      :active="isActive('allPokemons')"
      @click="to('allPokemons')"
    >
      <template #icon>
        <ListIcon />
      </template>
      All
    </NormalButton>
    <NormalButton
      :disabled="isActive('favoritePokemons')"
      :active="isActive('favoritePokemons')"
      @click="to('favoritePokemons')"
    >
      <template #icon>
        <StarIcon class="fill-white" />
      </template>
      Favorites
    </NormalButton>
  </footer>
</template>
