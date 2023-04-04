import { reactive } from '@nuxtjs/composition-api'

const audioPlayerState = reactive({
  audioSource: '',
  title: '',
})

export { audioPlayerState }
