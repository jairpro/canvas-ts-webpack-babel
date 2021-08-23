import { canvasInit, animate, clear, background } from './lib'

window.addEventListener('load', () => {
  canvasInit()
  animate()
})

export function frame() {
  clear()
  background()
}
