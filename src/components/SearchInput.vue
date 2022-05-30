<script setup>
import MagnifierIcon from "./icons/MagnifierIcon.vue";
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="relative">
    <MagnifierIcon class="absolute top-[15px] left-3" />
    <input
      class="h-12 w-80 max-w-sm bg-white rounded-md text-xl font-montserrat pl-9 shadow-md"
      type="text"
      placeholder="Search"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
