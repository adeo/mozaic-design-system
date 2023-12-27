<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.51 2.128a1 1 0 0 1 .98 0l8 4.5A1 1 0 0 1 21 7.5v9a1 1 0 0 1-.51.872l-8 4.5a1 1 0 0 1-.98 0l-8-4.5A1 1 0 0 1 3 16.5v-9a1 1 0 0 1 .51-.872l8-4.5ZM5 15.915V8.636l6.5 3.656v7.28L5 15.914Zm14 0-6.5 3.656v-7.279l2.195-1.235V13a1 1 0 1 0 2 0V9.932L19 8.636v7.28Zm-2.719-6.897 2.19-1.231L12 4.147 9.818 5.375l6.368 3.582c.033.019.065.04.095.061ZM7.778 6.522 5.53 7.787l6.47 3.64 2.248-1.265-6.47-3.64Z"/>
</svg>
