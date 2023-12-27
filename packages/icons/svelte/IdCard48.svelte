<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M6 8.5A1.5 1.5 0 0 0 4.5 10v28A1.5 1.5 0 0 0 6 39.5h36a1.5 1.5 0 0 0 1.5-1.5V10A1.5 1.5 0 0 0 42 8.5H6Zm1.5 28v-25h33v25h-33ZM17 20a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm8 0a4.986 4.986 0 0 1-1.599 3.665A9.003 9.003 0 0 1 29 32h-2a7 7 0 1 0-14 0h-2a9.003 9.003 0 0 1 5.599-8.335A5 5 0 1 1 25 20Zm4-2a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z"/>
</svg>
