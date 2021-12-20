<template>
  <div>
    <div>
      <h2 class="mb-6 inline">
        {{ release.title }}
      </h2>
      <br />
      <span class="small">{{ release.releaseDate }}</span>
    </div>

    <div class="flex flex-col lg:flex-row mb-6">
      <img
        @click="showImage(image)"
        v-for="image in release.images"
        :key="image"
        class="w-full zoom lg:w-1/2 my-2 mb-2 lg:my-6 release__image lazyload cursor-pointer"
        :class="{ invisible: image.zoomed }"
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
    <div class="mt-12">
      <h3>Band</h3>
      <div v-for="member in release.band" :key="member">{{ member }}</div>
    </div>
    <div class="mt-6">
      <h3>Collaborators</h3>
      <div v-for="member in release.collaborators" :key="member">
        {{ member }}
      </div>
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

    const showImage = (image) => {
      toggleOverlay(true)
      setOverlayContent(image)
    }
    return {
      showLyrics,
      showImage,
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
