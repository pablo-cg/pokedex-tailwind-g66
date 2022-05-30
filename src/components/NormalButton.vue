<script setup>
defineProps({
  active: Boolean,
});
</script>
<template>
  <button
    class="h-11 active:bg-crimsom min-w-[135px] rounded-full text-white font-bold flex justify-evenly items-center py-2 px-5 gap-2"
    :class="active ? 'bg-tomato' : 'bg-grey'"
  >
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>
