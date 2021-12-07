<template>
  <transition name="fade">
    <div
      @click="toggleOverlay"
      v-show="isOpen"
      class="overflow-x-auto fixed bg-black bg-opacity-90 text-white left-0 top-0 z-10 w-full h-full mb-12 px-4 min-h-screen min-h-full lg:px-16"
    >
      <div class="mt-12">
        <div class="w-full py-4 border-light-50 border-b">
          <h1 class="text-center lg:text-left">{{ overlayContent.title }}</h1>
        </div>
        <div
          class="uppercase mt-12 leading-10 mx:auto lg:ml-0 lg:max-w-2xl mb-24"
        >
          {{ overlayContent.lyrics }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { overlayContent, toggleOverlay, isOpen } from '@/use/useOverlay'

export default {
  props: {
    song: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    return { isOpen, toggleOverlay, overlayContent }
  },
}
</script>

<style lang="scss" scoped></style>
