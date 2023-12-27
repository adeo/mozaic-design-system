<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M13 8a1 1 0 1 0-2 0v16a1 1 0 1 0 2 0V8Zm8 0a1 1 0 1 0-2 0v16a1 1 0 1 0 2 0V8Z"/>
</svg>
