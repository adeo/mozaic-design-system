const { convertPxToRem } = require('../utils/tools')

const iconContent = (fileName, data) => {
  const size = fileName.replace('.svg', '').split('_').pop()
  const id = fileName.split('.').slice(0, -1).join('.')
  const parsedData = data.replace(
    `<svg id="${id}"`,
    `<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill}`,
  )

  const tag = fileName.replace(/_/g, '-').replace('.svg', '').toLowerCase()

  return `<svelte:options tag={null} />
  <script>
  export let id = "${id}";
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "${convertPxToRem(size)}";
</script>

${parsedData}`
}

const svelteIconsIndex = (icon) => `${iconContent(icon.fileName, icon.data)}`

module.exports = svelteIconsIndex
