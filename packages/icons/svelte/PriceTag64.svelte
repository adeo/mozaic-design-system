<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M38.667 6.5a1.5 1.5 0 0 0-1.061.44L6.939 37.605a1.5 1.5 0 0 0 0 2.121L24.273 57.06a1.5 1.5 0 0 0 2.121 0l30.667-30.667a1.5 1.5 0 0 0 .439-1.06V8A1.5 1.5 0 0 0 56 6.5H38.667ZM10.12 38.667 39.288 9.5H54.5v15.212L25.333 53.879 10.121 38.667Zm29.546-17.334a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"/>
</svg>
