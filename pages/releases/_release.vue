<template>
  <div>
    <h2 class="mb-6">{{ release.title }}</h2>
    <div class="flex flex-col lg:flex-row">
      <img
        v-for="image in release.images"
        :key="image"
        class="w-full lg:w-1/2 my-2 mb-2 lg:my-6 release__image lazyload"
        :src="`/images/${image}`"
      />
    </div>
    <nuxt-content class="my-6" :document="release" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const release = await $content(`releases/${params.release}`).fetch()
    return {
      release,
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
