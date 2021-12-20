import { reactive, computed } from '@vue/composition-api'

const overlayState = reactive({
  content: {},
  isOpen: false,
  isImage: false,
})
const isOpen = computed(() => overlayState.isOpen)
const isImage = computed(() => overlayState.isImage)
const overlayContent = computed(() => overlayState.content)
const toggleOverlay = (isImage = false) => {
  overlayState.isOpen = !overlayState.isOpen
  overlayState.isImage = isImage
  document.getElementById('layout').style.position = isOpen.value
    ? 'fixed'
    : 'relative'
}

const setOverlayContent = (content) => {
  overlayState.content = content
}

export { overlayContent, toggleOverlay, isOpen, setOverlayContent, isImage }
