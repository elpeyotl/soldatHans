<template>
  <div>
    <h2>{{ article.title }}</h2>
    <a href="/files/soldat_hans_promo.zip">Download promo package</a>

    <nuxt-content class="my-6" :document="article" />
    <img
      class="w-full h-auto block lazyload"
      :src="`/images/${article.image}`"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const article = await $content('bio').fetch()
    return {
      article,
    }
  },
}
</script>

<style scoped></style>
