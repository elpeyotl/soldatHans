<template>
  <transition name="fade">
    <div
      @click="toggleOverlay"
      v-show="isOpen"
      class="overflow-x-auto fixed bg-black bg-opacity-90 text-white left-0 top-0 z-10 w-full h-full mb-12 px-4 min-h-screen min-h-full lg:px-16"
    >
      <div v-if="!isImage" class="mt-12">
        <div class="w-full py-4 border-light-50 border-b">
          <h1 class="text-center lg:text-left">{{ overlayContent.title }}</h1>
        </div>
        <div
          class="uppercase mt-12 leading-10 mx:auto lg:ml-0 lg:max-w-2xl mb-24"
        >
          <div>{{ overlayContent.lyrics }}</div>
        </div>
      </div>
      <div v-else class="flex justify-center items-center h-screen">
        <img class="zoomImage" :src="`/images/${overlayContent}`" />
      </div>
    </div>
  </transition>
</template>

<script>
import {
  overlayContent,
  toggleOverlay,
  isOpen,
  isImage,
} from '@/use/useOverlay'

export default {
  setup() {
    return { isOpen, toggleOverlay, overlayContent, isImage }
  },
}
</script>

<style lang="scss" scoped>
.zoomImage {
  width: 90vh;
}
</style>
