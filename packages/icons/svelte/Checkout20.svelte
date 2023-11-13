<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M3.417 4.167a.75.75 0 0 1 .75-.75h11.666a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.167a.75.75 0 0 1-.75-.75v-7.5Zm1.5 3v3.75h10.166v-3.75H4.917Zm0-1h10.166v-1.25H4.917v1.25Zm.833 2.167a.5.5 0 0 1 .5-.5h1.667a.5.5 0 0 1 0 1H6.25a.5.5 0 0 1-.5-.5Zm3.5 8.333a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm2.427-.5a1.75 1.75 0 0 0-3.355 0H5.011a1.75 1.75 0 1 0 0 1h3.311a1.75 1.75 0 0 0 3.355 0h3.312a1.75 1.75 0 1 0 0-1h-3.312Zm4.24.5a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"/>
</svg>
