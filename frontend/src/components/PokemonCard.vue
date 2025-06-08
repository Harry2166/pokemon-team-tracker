
<script setup>
  import {defineProps, defineEmits} from 'vue';
  defineProps({
    name: {
      type: String,
      default: ""
    },
    image_url: {
      type: String,
      default: ""
    }
  })
  const emit = defineEmits(['click'])
</script>

<template>
  <div class="transform border rounded p-2 flex flex-col items-center motion-safe:hover:scale-110
    hover:bg-red-400 hover:border-gray-500" @click="emit('click')">
      {{name}}
      <img :src=image_url>
      <slot/>
    </div>
</template>
