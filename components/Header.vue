<template>
  <div class="w-full py-4 border-light-50 border-b">
    <h1 class="text-center lg:text-left">
      <nuxt-link to="/">SOLDAT HANS</nuxt-link>
    </h1>
    <nav class="mt-2 lg:mt-12">
      <ul class="flex justify-center text-gray-400 lg:flex-col">
        <nuxt-link to="anthaupt" class="hover:text-black cursor-pointer mr-4"
          >anthaupt</nuxt-link
        >
        <li class="hover:text-black cursor-pointer mr-4">es taut</li>
        <li class="hover:text-black cursor-pointer">dress rehersal</li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
