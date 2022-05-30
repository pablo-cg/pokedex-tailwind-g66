<script setup>
import FavoriteButton from "./FavoriteButton.vue";

defineProps({
  active: Boolean,
  pokemon: {
    type: String,
    default: "Pokémon",
  },
});
const emit = defineEmits(["set-favorite", "more-info"]);
</script>
<template>
  <div
    class="h-14 w-80 max-w-sm bg-white flex items-center rounded-md text-2xl justify-between px-3 py-2 shadow-sm capitalize"
    @click="emit('more-info')"
  >
    {{ pokemon }}
    <FavoriteButton :active="active" />
  </div>
</template>
