const { convertPxToRem } = require('../utils/tools')

const iconContent = (fileName, data) => {
  const size = fileName.replace('.svg', '').split('_').pop()

  const parsedData = data.replace(
    '<svg',
    `<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill}`
  )

  const tag = fileName.replace(/_/g, '-').replace('.svg', '').toLowerCase()

  return `<svelte:options tag="${tag}" />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "${convertPxToRem(size)}";
</script>

${parsedData}`
}

const svelteIconsIndex = (icon) => `${iconContent(icon.fileName, icon.data)}`

module.exports = svelteIconsIndex
