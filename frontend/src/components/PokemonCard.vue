
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
  <div class="border rounded p-2 flex flex-col items-center hover:shadow" @click="emit('click')">
      {{name}}
      <img :src=image_url>
      <slot/>
    </div>
</template>
