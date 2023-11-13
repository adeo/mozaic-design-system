<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.49 2.128a1 1 0 0 0-.98 0l-8 4.5A1 1 0 0 0 3 7.5v9a1 1 0 0 0 .51.872l8 4.5a1 1 0 0 0 .98 0l8-4.5A1 1 0 0 0 21 16.5v-9a1 1 0 0 0-.51-.872l-8-4.5ZM5 8.636v7.28l6.5 3.655v-7.279L5 8.636Zm7.5 10.935 6.5-3.656V8.636l-6.5 3.656v7.28Zm5.97-11.784L12 4.147l-6.47 3.64 6.47 3.64 6.47-3.64Z"/>
</svg>
