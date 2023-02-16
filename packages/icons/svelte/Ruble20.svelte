<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M5.833 1.75a.75.75 0 0 0-.75.75v7.167h-1.75a.75.75 0 0 0 0 1.5h1.75v2.666h-1.75a.75.75 0 0 0 0 1.5h1.75V17.5a.75.75 0 0 0 1.5 0v-2.167H10a.75.75 0 0 0 0-1.5H6.583v-2.666h5.292a4.708 4.708 0 1 0 0-9.417H5.833Zm6.042 7.917H6.583V3.25h5.292a3.208 3.208 0 1 1 0 6.417Z"/>
</svg>
