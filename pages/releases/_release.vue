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
          <div class="inline cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M14.17 5 19 9.83V19H5V5h9.17m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59zM7 15h10v2H7v-2zm0-4h10v2H7v-2zm0-4h7v2H7V7z"
              />
            </svg>
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
export default {
  async asyncData({ $content, params }) {
    const release = await $content(`releases/${params.release}`).fetch()
    return {
      release,
    }
  },
  components: { AudioPlayer, PlayIcon },
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
