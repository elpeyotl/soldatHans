<template>
  <div @click="onPlayHandler">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M8 5v14l11-7z" />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { audioPlayerState } from '@/use/usePlayer'
export default defineComponent({
  props: {
    source: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const onPlayHandler = () => {
      audioPlayerState.audioSource = props.source
      audioPlayerState.title = props.title
    }
    return { onPlayHandler }
  },
})
</script>

<style scoped></style>
