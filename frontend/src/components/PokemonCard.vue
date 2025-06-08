
<script setup>
  import {defineProps, defineEmits, computed} from 'vue';
  const props = defineProps({
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
    },
    can_click: {
      type: Boolean,
      default: true,
    }
  })
  const emit = defineEmits(['click'])
  const shownName = computed (() => { return props.will_capitalize ?
  props.name.charAt(0).toUpperCase() + props.name.slice(1) : props.name})

</script>

<template>
  <div
    class="transform border rounded p-2 flex flex-col items-center bg-white/50 border-red-400"
   :class = "{'motion-safe:hover:scale-110 hover:bg-red-400 hover:border-gray-500' : props.can_click}"
   @click="props.can_click && emit('click')"
  >
      {{ shownName }}
      <img :src=image_url>
      <slot/>
    </div>
</template>

