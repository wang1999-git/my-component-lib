<template>
  <div
    class="icon-switch"
    :class="{ 'is-active': isActive }"
    @click="toggle"
    data-testid="switch-container"
  >
    <span class="icon-switch-core"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IconSwitch',
  emits: ['change'],
  setup(props, { emit }) {
    const isActive = ref(false);

    const toggle = () => {
      isActive.value = !isActive.value;
      emit('change', isActive.value);
    };

    return { isActive, toggle };
  }
});
</script>

<style scoped>
.icon-switch {
  width: 50px;
  height: 26px;
  border-radius: 13px;
  background: #dcdfe6;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s;
}
.icon-switch.is-active {
  background: #409eff;
}
.icon-switch-core {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #fff;
  transition: left 0.3s;
}
.icon-switch.is-active .icon-switch-core {
  left: 26px;
}
</style>
