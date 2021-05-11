const { convertPxToRem } = require("../utils/tools")

const iconContent = (fileName, data) => {
  const size = fileName.replace(".svg", "").split("_").pop()

  const parsedData = data.replace(
    "<svg",
    `<svg width={size} height={size} fill="currentColor"`
  )

  return `<script>
  export let id = undefined;
  export let style = undefined;
  export let size = "${convertPxToRem(size)}";
</script>

${parsedData}`
}

const svelteIconsIndex = (icon) => `${iconContent(icon.fileName, icon.data)}`

module.exports = svelteIconsIndex
