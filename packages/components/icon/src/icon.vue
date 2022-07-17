<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { createNamesapce } from '@w-ui/utils/create';
import { iconProps } from './icon';

defineOptions({
  name: 'w-icon'
})

const bem = createNamesapce('icon')

const props = defineProps(iconProps);

const style = computed(() => {
  if (!props.color && !props.size) return {};

  return {
    ...(props.size ? { 'font-size': props.size + 'px' } : {}),
    ...(props.color ? { 'color': props.color } : {})
  }
})
</script>