// Multi browser copy to Clipboard
const copyToClipBoard = value => {
  const textarea = document.createElement(`textarea`)
  textarea.value = value
  textarea.setAttribute(`readonly`, true)
  textarea.setAttribute(`contenteditable`, true)
  textarea.style.position = `absolute`
  textarea.style.left = `-9999px`
  document.body.appendChild(textarea)
  textarea.select()
  const range = document.createRange()
  const sel = window.getSelection()
  sel.removeAllRanges()
  sel.addRange(range)
  textarea.setSelectionRange(0, textarea.value.length)
  document.execCommand(`copy`)
  document.body.removeChild(textarea)
}

export default copyToClipBoard
