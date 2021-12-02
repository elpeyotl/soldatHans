<template>
  <transition name="fade">
    <div v-show="source" class="flex flex-col items-center">
      {{ title }}
      <audio ref="audioPlayer" controls class="w-full">
        <source :src="source" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  watch,
  ref,
  onMounted,
} from '@vue/composition-api'
import { audioPlayerState } from '@/use/usePlayer'

export default defineComponent({
  name: 'AudioPlayer',
  setup() {
    const source = computed(() => audioPlayerState.audioSource)
    const title = computed(() => audioPlayerState.title)
    const audioPlayer = ref<HTMLMediaElement | null>(null)

    const initPlayer = () => {
      audioPlayer.value?.addEventListener('loadeddata', function () {
        if (audioPlayer.value?.readyState != undefined) {
          if (audioPlayer.value?.readyState >= 2) audioPlayer.value.play()
        }
      })
    }

    onMounted(() => {
      initPlayer()
    })

    return {
      source,
      title,
      audioPlayer,
    }
  },
})
</script>

<style lang="scss" scoped></style>
