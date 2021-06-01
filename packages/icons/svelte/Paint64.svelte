<svelte:options tag="universe-paint-64px" />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M53 11.5h-6V7a2 2 0 00-2-2H11a2 2 0 00-2 2v12a2 2 0 002 2h34a2 2 0 002-2v-4.5h5v8.69a3.51 3.51 0 01-2.36 3.31L30.87 33a6.52 6.52 0 00-4.37 6.14V43h-2a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2V45a2 2 0 00-2-2h-2v-3.86a3.49 3.49 0 012.36-3.3l18.77-6.51A6.5 6.5 0 0055 23.19V13.5a2 2 0 00-2-2zM44 18H12V8h32v6.5zM30.5 56h-5V46h5z"/></svg>