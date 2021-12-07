<template>
  <div class="w-full py-4 border-light-50 border-b">
    <h1 class="text-center lg:text-left">
      <nuxt-link to="/">SOLDAT HANS</nuxt-link>
    </h1>

    <nav class="mt-2 lg:mt-12">
      <ul class="flex justify-center text-gray-400 lg:flex-col">
        <nuxt-link
          :to="release.path"
          v-for="release in releases"
          :key="release.slug"
          class="hover:text-black cursor-pointer mr-4"
          >{{ release.title }}</nuxt-link
        >
      </ul>
    </nav>
    <div class="hidden lg:block mt-16 uppercase text-gray-400">
      <small>No racism.<br />No sexism.<br />No Homophobia</small>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      releases: [],
    }
  },
  async mounted() {
    this.releases = await this.$content(`releases`)
      .sortBy('releaseDate', 'desc')
      .fetch()
    console.log(this.releases)
  },
}
</script>

<style scoped lang="scss">
a.nuxt-link-exact-active {
  @apply text-black;
}
</style>
