<script setup>
import { RouterView } from "vue-router";
import PageLoader from "../components/PageLoader.vue";
import TheFooter from "../components/layout/TheFooter.vue";
import { onMounted, ref } from "vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>
<template>
  <PageLoader v-if="isLoading" />
  <RouterView v-slot="{ Component }">
    <Transition>
      <section v-if="!isLoading">
        <div class="container max-w-xs mx-auto py-6 mb-20">
          <Transition name="route" mode="out-in">
            <component :is="Component"></component>
          </Transition>
        </div>
        <TheFooter />
      </section>
    </Transition>
  </RouterView>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
