<script setup>
import StarIcon from "./icons/StarIcon.vue";
defineProps({
  active: Boolean,
});
</script>
<template>
  <button
    class="bg-lightGrey h-11 w-11 flex items-center justify-center rounded-full hover:bg-neutral-300/80"
  >
    <StarIcon :class="active ? 'fill-gold' : 'fill-grey'" />
  </button>
</template>
