<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M5.303 7.386a.75.75 0 0 1 1.06 0L10 11.023l3.636-3.637a.75.75 0 1 1 1.061 1.061l-4.167 4.167a.75.75 0 0 1-1.06 0L5.303 8.447a.75.75 0 0 1 0-1.06Z"/>
</svg>
