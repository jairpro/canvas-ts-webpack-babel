import { frame } from './app'
export const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;

/*if (!canvas.getContext) {
  throw new Error("Esse navegador não tem suporte para o canvas.")
}*/

export const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

export let boxWidth = 100
export let boxHeight = 100
let cellWidth = Math.round(boxWidth / 3)
let cellHeight = Math.round(boxHeight / 3)
export let columnsCount = 5
export let rowsCount = 5

export let x1: number
export let y1: number

export function canvasInit() {
  updateSize()

  window.addEventListener('resize', e => {
    updateSize()
    animate()
  })
}

function updateSize() {
  const bodyWidth = document.body.offsetWidth
  //const bodyHeight = document.body.offsetHeight
  const bodyHeight = window.innerHeight


  const boardSize = Math.min(bodyWidth -2 -2, bodyHeight -2 -4 -1)

  boxWidth = Math.round(boardSize / (columnsCount -1))
  boxHeight = Math.round(boardSize / (rowsCount - 1))

  cellWidth = Math.round(boxWidth / 3)
  cellHeight = Math.round(boxHeight / 3)

  x1 = -Math.round(boxWidth / 2)
  y1 = -Math.round(boxHeight / 2)

  canvas.width = boardSize
  canvas.height = boardSize 

  //const text = `boardSize: ${boardSize}`
  //console.log(text)
}

export function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function background() {
}

export function animate() {
  if (!window.requestAnimationFrame) return frame()
  window.requestAnimationFrame(frame)
}

export type TextValue = number | string

export function textCenter(value: TextValue, centerX: number, centerY: number, fontSize = Math.round(boxHeight * 0.33), fillStyle = 'rgb(32,32,0)') {
  const text = ''+value
  ctx.textBaseline = 'middle'  
  ctx.fillStyle = fillStyle
  
  // ctx.font = `${fontSize}px serif`
  ctx.font = `${fontSize}px Righteous`
  ctx.font = `${fontSize}px Fira Sans`
  //context.font="italic small-caps bold 12px arial";

  const { width: textWidth } = ctx.measureText(text)
  const textX = centerX - Math.round(textWidth / 2)
  const textY = centerY
  ctx.fillText(text,textX, textY)
  ctx.textBaseline = 'alphabetic'
}