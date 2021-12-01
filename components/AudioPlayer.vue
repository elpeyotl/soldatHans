<template>
  <transition name="fade">
    <div v-show="source" class="flex flex-col items-center">
      {{ title }}
      <audio autoplay controls class="w-full">
        <source :src="source" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from '@vue/composition-api'
import { audioPlayerState } from '@/use/usePlayer'

export default defineComponent({
  name: 'AudioPlayer',
  setup() {
    const source = computed(() => audioPlayerState.audioSource)
    const title = computed(() => audioPlayerState.title)

    return {
      source,
      title,
    }
  },
})
</script>

<style lang="scss" scoped></style>
