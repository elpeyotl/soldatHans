<template>
  <div>
    <h2 class="mb-6">{{ release.title }}</h2>
    <div class="flex flex-col lg:flex-row mb-6">
      <img
        v-for="image in release.images"
        :key="image"
        class="w-full lg:w-1/2 my-2 mb-2 lg:my-6 release__image lazyload"
        :src="`/images/${image}`"
      />
    </div>
    <div class="mb-6" v-for="(song, index) in release.songs" :key="song.title">
      <h3 class="italic relative">
        <span class="mr-2">
          {{ index + 1 }} - {{ song.title }} -
          <small>{{ song.duration }}</small>
        </span>
        <div class="inline-flex h-full absolute items-center">
          <div class="inline mr-1 cursor-pointer">
            <PlayIcon :source="song.src" :title="song.title" />
          </div>
          <div v-if="song.lyrics" class="inline cursor-pointer">
            <LyricsIcon @clickHandler="showLyrics(song)" />
          </div>
        </div>
      </h3>
    </div>
    <nuxt-content class="my-6" :document="release" />
  </div>
</template>

<script>
import AudioPlayer from '~/components/AudioPlayer.vue'
import PlayIcon from '~/components/PlayIcon.vue'
import ShowLyricsIcon from '~/components/LyricsIcon.vue'
import LyricsIcon from '~/components/LyricsIcon.vue'
import { setOverlayContent, toggleOverlay } from '@/use/useOverlay'

export default {
  async asyncData({ $content, params }) {
    const release = await $content(`releases/${params.release}`).fetch()
    return {
      release,
    }
  },
  components: { AudioPlayer, PlayIcon, ShowLyricsIcon, LyricsIcon },
  setup() {
    const showLyrics = (release) => {
      toggleOverlay()
      setOverlayContent(release)
    }
    return {
      showLyrics,
    }
  },
}
</script>

<style scoped lang="scss">
.release__image {
  @apply mr-4;
}

.relase__image:last-child {
  @apply mr-0;
}
</style>
