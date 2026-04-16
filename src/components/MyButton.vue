<template>
  <button class="my-button" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyButton',
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (e: MouseEvent) => emit('click', e);
    return { handleClick };
  }
});
</script>

<style scoped>
.my-button {
  padding: 8px 16px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
