import { reactive, computed, watch } from '@vue/composition-api'

const overlayState = reactive({
  content: {},
  isOpen: false,
})
const isOpen = computed(() => overlayState.isOpen)
const overlayContent = computed(() => overlayState.content)
const toggleOverlay = () => {
  overlayState.isOpen = !overlayState.isOpen
  document.getElementById('layout').style.position = isOpen.value
    ? 'fixed'
    : 'relative'
}

const setOverlayContent = (content) => {
  overlayState.content = content
}

export { overlayContent, toggleOverlay, isOpen, setOverlayContent }
