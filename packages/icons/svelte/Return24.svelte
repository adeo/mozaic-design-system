<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M5 4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V6h12v2.586l-.293-.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414L20 8.586V5a1 1 0 0 0-1-1H5Zm.707 8.293a1 1 0 0 0-1.414 0l-2 2a1 1 0 1 0 1.414 1.414L4 15.414V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 1 0-2 0v2H6v-2.586l.293.293a1 1 0 0 0 1.414-1.414l-2-2Z"/>
</svg>
