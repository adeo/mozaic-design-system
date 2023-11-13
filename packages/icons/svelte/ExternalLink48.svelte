<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M24.5 6A1.5 1.5 0 0 0 26 7.5h12.379l-21.44 21.44a1.5 1.5 0 0 0 2.122 2.12L40.5 9.622V22a1.5 1.5 0 0 0 3 0V6A1.5 1.5 0 0 0 42 4.5H26A1.5 1.5 0 0 0 24.5 6ZM6 12.5A1.5 1.5 0 0 0 4.5 14v28A1.5 1.5 0 0 0 6 43.5h28a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-3 0v6.5h-25v-25H14a1.5 1.5 0 0 0 0-3H6Z"/>
</svg>
