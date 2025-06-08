
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
    },
    will_capitalize: {
      type: Boolean,
      default: true
    }
  })
  const emit = defineEmits(['click'])
</script>

<template>
  <div class="transform border rounded p-2 flex flex-col items-center motion-safe:hover:scale-110
    hover:bg-red-400 hover:border-gray-500 bg-white border-red-400" @click="emit('click')">
    {{will_capitalize ? name.charAt(0).toUpperCase() + name.slice(1) : name}}
      <img :src=image_url>
      <slot/>
    </div>
</template>
