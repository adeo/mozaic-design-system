<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M5.208 1.75a.75.75 0 0 0-.75.75v3.667H3.75a.5.5 0 1 0 0 1H10a.5.5 0 0 0 0-1h-.708V2.5a.75.75 0 0 0-.75-.75H5.208Zm2.584 4.417V3.25H5.958v2.917h1.834Zm3.958-2a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75V17.5a.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75v-5.833a.75.75 0 0 1 .75-.75h.917v-.084a.75.75 0 0 1 .75-.75h5.416a.75.75 0 0 1 .75.75v.084h1.417v-6.75Zm0 8.25v4.333H8v-4.333h3.75Zm-4.75 0v4.333H3.25v-4.333H7Zm9.75 4.333h-3.5V8.833h3.5v7.917Zm0-8.917h-3.5V4.917h3.5v2.916Z"/>
</svg>
