<script setup>
import { useRouter } from "vue-router";
import PikachuImage from "../components/icons/PikachuImage.vue";

const router = useRouter();

function start() {
  router.push({ name: "allPokemons" });
}
</script>

<template>
  <div class="h-screen w-screen flex flex-col items-center px-8 gap-4">
    <PikachuImage class="mt-8 w-full" />
    <h1 class="text-2xl font-bold">Welcome to Pokédex</h1>
    <p class="text-center text-xl mb-6">
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world.
    </p>
    <NormalButton @click="start" class="text-xl" active>
      Get started
    </NormalButton>
  </div>
</template>
