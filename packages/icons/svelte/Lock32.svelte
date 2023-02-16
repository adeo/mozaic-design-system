<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M16 3a6.333 6.333 0 0 0-6.333 6.333v3h-3a1 1 0 0 0-1 1V28a1 1 0 0 0 1 1h18.666a1 1 0 0 0 1-1V13.333a1 1 0 0 0-1-1h-3v-3A6.333 6.333 0 0 0 16 3Zm4.333 9.333v-3a4.333 4.333 0 1 0-8.666 0v3h8.666ZM7.667 27V14.333h16.666V27H7.667Z"/>
</svg>
