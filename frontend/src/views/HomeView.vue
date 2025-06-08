<script setup>
  import Title from '@/components/Title.vue'
  import Carousel from '@/components/Carousel.vue'
</script>

<template>
  <Title>
    <h1 class="flex flex-col items-center font-bold text-5xl text-gray-200 text-shadow-accent
      rounded-3xl px-3 py-3 bg-black/50">Pokemon Tracker</h1>
  </Title>
  <div class="flex flex-col items-center">
    <h2 class="text-gray-200 font-semibold text-3xl text-center rounded-3xl bg-black/50 px-3
      py-3">Check your Pokemon!</h2>
    <Carousel class="scale-150 py-10"/>
  </div>
  <hr>
  <div class="flex flex-col items-center">
    <h2 class="text-white font-semibold text-3xl rounded-3xl text-center bg-black/50 py-3 px-3
      m-3">What is this?</h2>
    <p class="text-gray-200 bg-black/50 rounded-3xl text-center px-5">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet, nibh et condimentum lacinia, velit ligula lacinia odio, id euismod mi ipsum eget quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse aliquet, nisi et condimentum elementum, arcu elit tristique neque, non sollicitudin sem dolor consequat orci. Vivamus laoreet vehicula pharetra. Duis nisi felis, consequat sed enim vitae, semper vulputate est. Etiam non lectus et justo imperdiet mattis. Nullam pharetra urna a massa mattis mattis. Aliquam eleifend, libero ac volutpat consequat, massa mauris consectetur est, eu blandit ex nulla et mi. Fusce pulvinar lectus eu tincidunt fringilla.

Sed auctor pulvinar odio sagittis luctus. Morbi mollis lacus ut libero faucibus tempor. Maecenas non felis lobortis, pulvinar magna id, tincidunt neque. Ut vitae nisl maximus, interdum metus feugiat, bibendum massa. Donec hendrerit justo eget lorem auctor iaculis. Donec vitae magna est. Duis vel ex accumsan metus porta mattis nec sed elit. Sed pretium arcu eget pulvinar elementum. In sed risus elementum, fermentum mi vel, pellentesque dolor. Donec vel venenatis purus.

Morbi sagittis sit amet justo vitae lacinia. Vivamus placerat dui vel laoreet congue. Nulla id enim nulla. Donec malesuada risus vitae velit commodo laoreet. Nulla rutrum ipsum lorem, id finibus nisi dapibus aliquam. Cras dignissim neque id est lacinia viverra. In varius massa ut ligula dictum, at dapibus sem fringilla. Duis tincidunt pulvinar lacus, vitae venenatis felis tristique in. Ut laoreet, nisl vel auctor sollicitudin, massa ligula malesuada magna, et consequat metus metus ut mauris. Sed semper euismod neque, nec commodo sem aliquam at. Vestibulum condimentum nulla vitae leo maximus laoreet. Donec a nulla nunc. Morbi non placerat nunc. Morbi id tincidunt sapien. Aenean a ipsum velit. Nullam enim elit, pharetra vel velit at, ultrices laoreet quam.
    </p>
  </div>
</template>
