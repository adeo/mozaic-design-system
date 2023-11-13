<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11 3a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a9.969 9.969 0 0 1-2.859 7H21a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.292A8 8 0 0 0 12 4a1 1 0 0 1-1-1ZM3 5h1.859A9.969 9.969 0 0 0 2 12c0 5.523 4.477 10 10 10a1 1 0 1 0 0-2A8 8 0 0 1 6 6.708V8a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2Zm7 3a2 2 0 0 1 4 0v3.764a3 3 0 1 1-4 0V8Zm2-1a1 1 0 0 0-1 1v4.25l-.2.15a2 2 0 1 0 2.4 0l-.2-.15V8a1 1 0 0 0-1-1Zm-.5 5.585a1.5 1.5 0 1 0 1 0V10h-1v2.585Z"/>
</svg>
