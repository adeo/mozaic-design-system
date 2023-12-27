<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5.667v3a1 1 0 0 0 1.65.76L15.704 21h.464v5.667a.5.5 0 0 0 .5.5h5.166l2.534 1.9a.5.5 0 0 0 .8-.4v-1.5h3.5a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H25V4a1 1 0 0 0-1-1H4Zm21 14.167V20a1 1 0 0 1-1 1h-6.833v5.167H22a.5.5 0 0 1 .3.1l1.867 1.4v-1a.5.5 0 0 1 .5-.5h3.5v-9H25ZM5 19V5h18v14h-7.667a1 1 0 0 0-.65.24l-3.016 2.586V20a1 1 0 0 0-1-1H5Z"/>
</svg>
