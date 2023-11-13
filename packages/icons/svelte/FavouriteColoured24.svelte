<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.614 5.74a5.061 5.061 0 1 0-7.45 6.839l7.128 7.128a1 1 0 0 0 1.415 0l7.128-7.128a5.061 5.061 0 1 0-7.45-6.839l-.386.458-.385-.458Z"/>
</svg>
