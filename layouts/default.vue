<template>
  <div
    class="w-full h-full mb-12 px-4 min-h-screen min-h-full lg:px-16 max-w-screen-2xl"
  >
    <div class="flex justify-center">
      <Header
        class="w-full bg-white fixed lg:h-screen translate-x-1/2 left--1/2 lg:w-64 lg:left-16 lg:top-12 lg:mr-12"
      />
      <Nuxt class="mt-32 mb-64 w-full h-full lg:ml-80 lg:mt-40" />
      <AudioPlayer class="fixed bottom-0 w-64 lg:left-16 mb-6" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
body {
  @apply mb-64;
}
</style>
