import { reactive } from '@vue/composition-api'

const audioPlayerState = reactive({
  audioSource: '',
  title: '',
})

export { audioPlayerState }
